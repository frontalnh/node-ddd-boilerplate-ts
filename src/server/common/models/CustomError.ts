export class CustomError extends Error {
  code: string;
  message: string;
  status: number;
  constructor(code, message?) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
