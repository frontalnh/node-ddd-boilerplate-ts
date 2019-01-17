import { CustomError } from '@common/models/CustomError';
import { HttpErrCode } from '@common/constants/HttpErrCode';
import { decodeJwt } from '@utils/authenticator';
import { ApiUserRepositoryImpl } from '@infra/sequelizejs/mysql/repositories/api-user.repository.impl';

export function apiGuard(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  let originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    try {
      let jwt = args[0].cookies['sa-jwt'];

      if (!jwt)
        return args[2](
          new CustomError(HttpErrCode.JWT.NO_TOKEN, 'jwt 토큰이 없습니다.')
        );

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
  let apiUserRepository = new ApiUserRepositoryImpl();
  let decoded: { user: any } = <{ user: any }>decodeJwt(jwt);

  console.log('Decoded: ', decoded);
  let user = await apiUserRepository.findById(decoded.user.id);
  if (!user) throw new Error(HttpErrCode.API.NO_USER);

  return user;
};
