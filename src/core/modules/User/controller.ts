import { Request, Response } from 'express';

import { ApiError } from '@core/models';
import { responseService } from '@core/services';
import { UserDocument } from '@core/modules/User/interfaces';

import * as userService from './service';

export function readManyUsers(req: Request, res: Response): void {
  try {
    throw new ApiError(
      responseService.HTTP_CODES.INTERNAL_SERVER_ERROR,
      'endpoint_not_implemented',
    );
  } catch (error) {
    responseService.sendError(res, error);
  }
}

export async function readOneUser(req: Request, res: Response): Promise<void> {
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
    const authUser = res.locals.authUser as UserDocument;
    const user = await userService.findUser(authUser._id);

    responseService.sendJson(res, { user });
  } catch (error) {
    responseService.sendError(res, error);
  }
}
