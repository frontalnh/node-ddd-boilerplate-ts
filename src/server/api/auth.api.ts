import { UserService } from '../domain/user/user.service';
import { HttpErrMsg } from '../utils/HttpErrMsg';

import { UserRepository } from '../domain/user/UserRepository';
import { encodeJwt } from '../utils';

export class AuthApi {
  userService: UserService;
  userRepository: UserRepository;

  constructor(userService: UserService, userRepository: UserRepository) {
    this.userService = userService;
    this.userRepository = userRepository;
  }

  login(phone, password): Promise<{ user: Object; token: string }> {
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
      const jwtToken = encodeJwt({ user: { _id: user._id } });

      resolve({ user: { _id: user._id }, token: jwtToken });
    });
  }
}
