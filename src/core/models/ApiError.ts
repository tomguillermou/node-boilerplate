export class ApiError {
  public readonly type = 'ApiError';

  public readonly httpCode: number;

  public readonly code: string;

  constructor(httpCode: number, code: string) {
    this.httpCode = httpCode;
    this.code = code;
  }
}
