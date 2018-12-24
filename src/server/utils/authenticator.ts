import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Constants } from 'server/common/Constants';

export const encodeJwt = (data: any) => {
  const expiresIn = 24 * 360000000;
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
