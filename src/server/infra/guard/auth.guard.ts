import { UserRepositoryImpl } from '@infra/sequelizejs/mysql/repositories';

import { HttpErrCode } from '@common/constants/HttpErrCode';
import { CustomError } from '@common/models/CustomError';
import { cryptoHelper } from '@utils/cryptoHelper';
import { JwtPayload } from 'server/common/models/JwtPayload';

export function authGuard(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    try {
      let jwt = args[0].cookies.jwtToken;

      if (!jwt) return args[2](new CustomError(HttpErrCode.JWT.NO_TOKEN, 'jwt 토큰이 없습니다.'));
      let user = await extractUserFromJwt(jwt);

      args.push(user);

      let result = originalMethod.apply(this, args);

      return result;
    } catch (err) {
      return args[2](err);
    }
  };

  return descriptor;
}

const extractUserFromJwt = async (jwt: string) => {
  let userRepository = new UserRepositoryImpl();
  let decoded: JwtPayload = cryptoHelper.decodeJwt(jwt) as JwtPayload;

  let users = await userRepository.findAll({
    where: { id: decoded.user.id },
    raw: true
  });
  if (users.length === 0) throw new Error(HttpErrCode.LOGIN.NO_USER);

  return users[0];
};
