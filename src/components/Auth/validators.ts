import { NextFunction, Request, Response } from "express";

import { handleErrorReponse } from "../../core/errors";
import { validateEmail, validatePassword } from "../../core/validators";

export function login(req: Request, res: Response, next: NextFunction) {

    try {
        // Nothing to validate

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export function register(req: Request, res: Response, next: NextFunction) {

    try {
        validateEmail(req.body.email);

        validatePassword(req.body.password);

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
