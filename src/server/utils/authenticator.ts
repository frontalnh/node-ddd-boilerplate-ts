import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { Constants } from '@common/Constants';

export const encodeJwt = (data: any, expTime?: number) => {
  let expiresIn = 24 * 360000000;
  if (expTime) expiresIn = expTime;
  const jwtToken = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn });

  // session save logic;;
  return jwtToken;
};

export const decodeJwt = token => {
  console.log(token);
  var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  return decoded;
};

export const encrypt = password => {
  const salt = bcrypt.genSaltSync(Constants.BCRYPT.SALT_WORK_FACTOR);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
