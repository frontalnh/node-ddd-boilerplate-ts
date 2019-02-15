import { HttpErrCode } from '@common/constants/HttpErrCode';
import { CustomError } from '@common/models/CustomError';

import { UserRepositoryImpl } from '@infra/sequelizejs/mysql/repositories';
import { cryptoHelper } from '@utils/cryptoHelper';

export function apiGuard(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    try {
      let jwt = args[0].cookies['sa-jwt'];

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
  let apiUserRepository = new UserRepositoryImpl();
  let decoded: { user: any } = cryptoHelper.decodeJwt(jwt) as { user: any };

  let user = await apiUserRepository.findById(decoded.user.id);
  if (!user) throw new Error(HttpErrCode.AUTH.NO_USER);

  return user;
};
