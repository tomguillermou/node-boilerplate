import jwt from 'jsonwebtoken';

import { ApiError } from '@core/models/ApiError';
import { responseService, validationService } from '@core/services';

const JWT_SECRET = process.env.JWT_SECRET as string;

export function sign(payload: string): string {
    return jwt.sign(payload, JWT_SECRET);
}

export function verify(payload: string): string {
    const token = jwt.verify(payload, JWT_SECRET);

    if (typeof token !== 'string') {
        throw new ApiError(responseService.HTTP_CODES.BAD_REQUEST, 'invalid_jwt');
    }

    if (!validationService.isValidId(token)) {
        throw new ApiError(responseService.HTTP_CODES.BAD_REQUEST, 'invalid_jwt');
    }

    return token;
}
