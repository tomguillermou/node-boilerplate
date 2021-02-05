import { Response } from 'express';

import { ApiError } from '@core/models/errors';

export class ResponseService {
    constructor() {}

    public sendError(res: Response, error: Error | ApiError): void {
        if (process.env.NODE_ENV === 'development') {
            console.log(error);
        }

        if (error instanceof ApiError) {
            res.status(error.httpCode).json({ message: error.toString() });
        } else {
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
}
