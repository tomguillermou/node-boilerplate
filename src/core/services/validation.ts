import { isEmail } from 'validator'; //TODO: remove this dependency

import { ApiError } from '@core/models/errors';

export class ValidationService {
    private readonly validDomainRegex = new RegExp(/@nodein.com/);

    private readonly hasDigitRegex = new RegExp(/\d/);
    private readonly hasLowercaseLetterRegex = new RegExp(/[a-z]/);
    private readonly hasUppercaseLetterRegex = new RegExp(/[A-Z]/);

    private readonly validObjectIdRegex = new RegExp(/^[0-9a-fA-F]{24}$/);

    constructor() {}

    public testEmail(email: string) {
        if (!isEmail(email)) {
            throw new ApiError('Invalid email format', 400);
        } else if (!email.match(this.validDomainRegex)) {
            throw new ApiError('Invalid email domain', 400);
        }
    }

    public testPassword(password: string) {
        if (password.length < 8) {
            throw new ApiError('Password is too short', 400);
        } else if (!password.match(this.hasDigitRegex)) {
            throw new ApiError('Password is missing one digit', 400);
        } else if (!password.match(this.hasLowercaseLetterRegex)) {
            throw new ApiError('Password is missing one lowercase letter', 400);
        } else if (!password.match(this.hasUppercaseLetterRegex)) {
            throw new ApiError('Password is missing one uppercase letter', 400);
        }
    }

    public testObjectId(objectId: string) {
        if (!objectId.match(this.validObjectIdRegex)) {
            throw new ApiError('Invalid ObjectId format', 400);
        }
    }
}
