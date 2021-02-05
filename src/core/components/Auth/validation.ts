import { NextFunction, Request, Response } from 'express';

import { validationService, responseService } from '@core/services';

export class AuthValidation {
    constructor() {}

    login(req: Request, res: Response, next: NextFunction) {
        try {
            // Nothing to validate
            next();
        } catch (error) {
            responseService.sendError(res, error);
        }
    }

    register(req: Request, res: Response, next: NextFunction) {
        try {
            validationService.testEmail(req.body.email);
            validationService.testPassword(req.body.password);
            next();
        } catch (error) {
            responseService.sendError(res, error);
        }
    }
}
