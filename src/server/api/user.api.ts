import { HttpErrCode } from '@common/constants/HttpErrCode';
import { CustomError } from '@common/models/CustomError';
import { User, UserStatus } from '@domain/user/user.model';
import { cryptoHelper } from '@utils/cryptoHelper';
import { UserRepository } from '../domain/user/user.repository';

export class UserApi {
  constructor(private userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async register(email, name, password, phone, birthday) {
    let users = await this.userRepository.findAll({
      where: { email, status: UserStatus.ACTIVE }
    });
    if (users.length !== 0) throw new CustomError(HttpErrCode.REGISTER.EXIST_EMAIL, '이미 존재하는 이메일입니다.');
    users = await this.userRepository.findAll({
      where: { phone, status: UserStatus.ACTIVE }
    });
    if (users.length !== 0) throw new CustomError(HttpErrCode.REGISTER.EXIST_PHONE, '이미 존재하는 핸드폰번호 입니다.');

    let user = new User({
      email,
      password: cryptoHelper.encrypt(password),
      phone,
      birthday
    });

    let created = await this.userRepository.save(user);

    return created;
  }
}
