import { NextFunction, Request, Response } from 'express';

import { ApiError } from '@core/models/errors';

import { jwtService, responseService } from '@core/services';

import User from '@core/components/User/model';

export default async function authenticateUser(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader || !authorizationHeader.split(' ').pop()) {
            throw new ApiError('Missing authorization header', 400);
        }

        const decodedToken = jwtService.verify(authorizationHeader.split(' ').pop() as string);

        req.authUser = await User.findById(decodedToken).lean().exec();

        if (!req.authUser) {
            throw new ApiError('Authentication failed', 403);
        }

        next();
    } catch (error) {
        responseService.sendError(res, error);
    }
}
