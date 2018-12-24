import { UserService } from '../domain/user/user.service';
import { HttpErrMsg } from '../common/constants/HttpErrMsg';
import { UserRepository } from '../domain/user/UserRepository';

import { User } from '@domain/user/User';
import { encodeJwt } from '@utils/authenticator';

export class AuthApi {
  userService: UserService;
  userRepository: UserRepository;

  constructor(userService: UserService, userRepository: UserRepository) {
    this.userService = userService;
    this.userRepository = userRepository;
  }

  login(phone, password): Promise<{ user: User; token: string }> {
    return new Promise(async (resolve, reject) => {
      let users = await this.userRepository.findByQuery({ phone });

      if (users.length == 0) {
        reject(new Error(HttpErrMsg.AUTH.NO_USER));
        return;
      }

      let user = users[0];

      // check password
      if (!user.comparePassword(password)) {
        reject(new Error(HttpErrMsg.AUTH.INVALID_PASSWORD));
      }

      // send token and object
      const jwtToken = encodeJwt({ user: { _id: user.id } });

      resolve({ user, token: jwtToken });
    });
  }
}
