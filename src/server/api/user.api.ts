import { UserService } from '../domain/user/user.service';
import { CreateUserDto } from '../domain/user/dto/CreateUserDto';
import { User } from '../domain/user/User';
import { UserRepository } from '../domain/user/UserRepository';
import { encrypt, encodeJwt } from '../utils';
import { HttpErrMsg } from '../utils/HttpErrMsg';

export class UserApi {
  userService: UserService;
  userRepository: UserRepository;

  constructor(userService: UserService, userRepository: UserRepository) {
    this.userService = userService;
    this.userRepository = userRepository;
  }

  register(dto: CreateUserDto): Promise<{ user: Object; token: string }> {
    return new Promise(async (resolve, reject) => {
      let { phone, email, password } = dto;

      //   encrypt password
      password = encrypt(password);

      let u1 = await this.userRepository.findByQuery({ phone });

      if (u1.length != 0)
        return reject(new Error(HttpErrMsg.REGISTER.EXIST_TEL));

      let u2 = await this.userRepository.findByQuery({ email });

      if (u2.length != 0)
        return reject(new Error(HttpErrMsg.REGISTER.EXIST_EMAIL));

      let user = new User();
      Object.assign(dto, user);

      this.userRepository.save(user).then(
        user => {
          let data = { _id: user._id };
          const jwtToken = encodeJwt(data);

          resolve({ user: data, token: jwtToken });
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
