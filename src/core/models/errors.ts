export class ApiError {
    type = 'ApiError';
    message: string;
    httpCode: number;

    constructor(message: string, httpCode: number) {
        this.message = message;
        this.httpCode = httpCode;
    }

    toString() {
        return `${this.type}: ${this.message}.`;
    }
}
