import { NextFunction, Request, Response } from 'express';

import { handleErrorReponse } from '../../core/errors';
import { validateObjectId } from '../../core/validators';

export function readMany(req: Request, res: Response, next: NextFunction) {

    try {
        // Nothing to validate

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export function readOne(req: Request, res: Response, next: NextFunction) {

    try {
        validateObjectId(req.params.id);

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
