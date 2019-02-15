import { Constants } from '@common/Constants';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

class CryptoHelper {
  public encodeJwt(data: any, expTime?: number) {
    let expiresIn = 24 * 360000000;
    if (expTime) expiresIn = expTime;
    const jwtToken = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn });

    // session save logic;;
    return jwtToken;
  }

  public decodeJwt(token) {
    let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    return decoded;
  }

  public encrypt(password) {
    const salt = bcrypt.genSaltSync(Constants.BCRYPT.SALT_WORK_FACTOR);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  }
}

export const cryptoHelper = new CryptoHelper();
