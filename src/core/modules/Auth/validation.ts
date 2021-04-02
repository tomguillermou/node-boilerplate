import { NextFunction, Request, Response } from 'express';

import { validationService, responseService } from '@core/services';

//TODO: Remove class implementation
export class AuthValidation {
    login(req: Request, res: Response, next: NextFunction): void {
        try {
            // Nothing to validate
            next();
        } catch (error) {
            responseService.sendError(res, error);
        }
    }

    register(req: Request, res: Response, next: NextFunction): void {
        try {
            validationService.isValidEmail(req.body.email);
            // validationService.isValidPassword(req.body.password);
            next();
        } catch (error) {
            responseService.sendError(res, error);
        }
    }
}
