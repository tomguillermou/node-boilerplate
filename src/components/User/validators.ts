import { NextFunction, Request, Response } from "express";

import { handleErrorReponse } from "../../core/errors";

export function readMany(req: Request, res: Response, next: NextFunction) {

    try {
        // Nothing to validate

        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
