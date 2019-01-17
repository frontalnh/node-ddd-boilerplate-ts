import { CustomError } from '@common/models/CustomError';
import { HttpErrCode } from '@common/constants/HttpErrCode';

export const notFoundErrorHandler = (req, res, next) => {
  const err: any = new Error('Not found');
  err.status = 404;
  next(err);
};

export const domainErrHandler = (err: CustomError, req, res, next) => {
  let { status, message, code } = err;
  res.status(err.status || 400);

  // Parse Joi Error
  let msg = extractMessageFromCode(err);
  msg = extractFromJoiMessage(message);

  res.send({
    error: {
      message: msg,
      code: err.code
    }
  });
};

const extractMessageFromCode = (err: CustomError) => {
  let msg = err.message;
  switch (err.code) {
    case HttpErrCode.REGISTER.EXIST_EMAIL: {
      msg = '이미 가입된 이메일입니다.';
    }
  }

  return msg;
};

const extractFromJoiMessage = (message: string) => {
  if (!message) return message;
  let msg = message;
  // Joi Error
  if (message.match(/child.*.fails.because.*.is not allowed to be empty/)) {
    let word = extractFromQuotedWord(message);
    msg = `${word} 값이 입력되지 않았습니다.`;
  }
  if (message.match(/child.*.fails because.*.is required]/)) {
    let word = extractFromQuotedWord(message);
    msg = `${word} 값은 필수로 입력되어야 합니다.`;
  }
  if (message.match(/child.*.fails because.*.must be a valid email]/)) {
    msg = `올바른 이메일 형식이 아닙니다.`;
  }

  return msg;
};

const extractFromQuotedWord = (message: string) => {
  if (message.match(/".+?"/g)) {
    let quotedWord = (<string[]>message.match(/".+?"/g))[0];
    let word = quotedWord.split('"')[1];
    return word;
  }

  return message;
};
