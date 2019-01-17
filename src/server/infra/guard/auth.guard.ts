import { UserRepositoryImpl } from '@infra/sequelizejs/mysql/repositories';
import { decodeJwt } from '@utils/authenticator';
import { JwtPayload } from 'server/common/models/JwtPayload';
import { HttpErrCode } from '@common/constants/HttpErrCode';
import { CustomError } from '@common/models/CustomError';

export function authGuard(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  let originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    try {
      console.log(args[0].cookies);
      let jwt = args[0].cookies.jwtToken;
      console.log('jwt: ', jwt);
      if (!jwt)
        return args[2](
          new CustomError(HttpErrCode.JWT.NO_TOKEN, 'jwt 토큰이 없습니다.')
        );
      let user = await extractUserFromJwt(jwt);

      args.push(user);

      let result = originalMethod.apply(this, args);
      return result;
    } catch (err) {
      console.log(args[2]);
      return args[2](err);
    }
  };

  return descriptor;
}

const extractUserFromJwt = async (jwt: string) => {
  let userRepository = new UserRepositoryImpl();
  let decoded: JwtPayload = <JwtPayload>decodeJwt(jwt);

  let users = await userRepository.findAll({
    where: { id: decoded.user.id },
    raw: true
  });
  if (users.length === 0) throw new Error(HttpErrCode.LOGIN.NO_USER);

  return users[0];
};
