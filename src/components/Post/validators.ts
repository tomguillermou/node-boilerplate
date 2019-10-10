import { NextFunction, Request, Response } from "express";

import { handleErrorReponse } from "../../core/errors";

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
        // Nothing to validate
        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export function readOne(req: Request, res: Response, next: NextFunction) {

    try {
        // Nothing to validate
        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export function updateOne(req: Request, res: Response, next: NextFunction) {

    try {
        // Nothing to validate
        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}

export function deleteOne(req: Request, res: Response, next: NextFunction) {

    try {
        // Nothing to validate
        next();

    } catch (error) {
        handleErrorReponse(res, error);
    }
}
