import { NextFunction, Request, Response } from 'express';

import { handleErrorReponse } from '../../core/errors';
import { validateObjectId } from '../../core/validators';

export function createOne(req: Request, res: Response, next: NextFunction) {

    try {
        // Nothing to validate

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export function readMany(req: Request, res: Response, next: NextFunction) {

    try {
        validateObjectId(req.query.receiverId);

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
