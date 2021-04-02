import { NextFunction, Request, Response } from 'express';

import { ApiError } from '@core/models/ApiError';
import { jwtService, responseService } from '@core/services';

import { userService } from '@core/modules/User';

export async function authenticateUser(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader || !authorizationHeader.split(' ').pop()) {
            throw new ApiError(
                responseService.HTTP_CODES.BAD_REQUEST,
                'missing_authorization_header'
            );
        }

        const decodedToken = jwtService.verify(authorizationHeader.split(' ').pop() as string);

        const authUser = await userService.findUser(decodedToken);

        if (!authUser) {
            throw new ApiError(responseService.HTTP_CODES.FORBIDDEN, 'authentication_failed');
        }

        res.locals.authUser = authUser;

        next();
    } catch (error) {
        responseService.sendError(res, error);
    }
}
