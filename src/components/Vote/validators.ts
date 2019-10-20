import { NextFunction, Request, Response } from 'express';

import { handleErrorReponse } from '../../core/errors';
import { validateObjectId } from '../../core/validators';

export function createOne(req: Request, res: Response, next: NextFunction) {

    try {
        validateObjectId(req.body.post);

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
