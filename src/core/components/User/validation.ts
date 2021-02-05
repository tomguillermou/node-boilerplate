import { NextFunction, Request, Response } from 'express';

import { validationService, responseService } from '@core/services';

export class UserValidation {
    constructor() {}

    readMany(req: Request, res: Response, next: NextFunction) {
        try {
            // Nothing to validate
            next();
        } catch (error) {
            responseService.sendError(res, error);
        }
    }

    readOne(req: Request, res: Response, next: NextFunction) {
        try {
            validationService.testObjectId(req.params.id);
            next();
        } catch (error) {
            responseService.sendError(res, error);
        }
    }
}
