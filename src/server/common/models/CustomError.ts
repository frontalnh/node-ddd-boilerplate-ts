export class CustomError extends Error {
  public code: string;
  public message: string;
  public status: number;
  constructor(code, message?) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
