import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '@utils/secrets';

import { ApiError } from '@core/models/errors';

export class JwtService {
    constructor() {}

    public sign(payload: string): string {
        return jwt.sign(payload, JWT_SECRET);
    }

    public verify(payload: string): string {
        const token = jwt.verify(payload, JWT_SECRET);

        if (typeof token !== 'string') {
            throw new ApiError('Invalid JSON web token.', 400);
        }

        // TODO: use validation service instead
        if (!token.match(/^[0-9a-fA-F]{24}$/)) {
            throw new ApiError('Invalid JSON web token.', 400);
        }

        return token;
    }
}
