import { Request, Response } from 'express';

import { ApiError } from '@core/models';
import { responseService } from '@core/services';

import * as userService from './service';

export async function readMany(req: Request, res: Response): Promise<void> {
    try {
        throw new ApiError(
            responseService.HTTP_CODES.INTERNAL_SERVER_ERROR,
            'endpoint_not_implemented'
        );
    } catch (error) {
        responseService.sendError(res, error);
    }
}

export async function readOne(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const user = await userService.findUser(userId);

        responseService.sendJson(res, { user });
    } catch (error) {
        responseService.sendError(res, error);
    }
}

export async function fetchMe(req: Request, res: Response): Promise<void> {
    try {
        const authUser = res.locals.authUser;
        const user = await userService.findUser(authUser._id);

        responseService.sendJson(res, { user });
    } catch (error) {
        responseService.sendError(res, error);
    }
}
