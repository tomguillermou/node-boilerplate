import { Request, Response } from 'express';

import { responseService } from '@core/services';
import { userService } from '@core/modules/User';
import { User } from '@core/modules/User/interfaces';

export async function login(req: Request, res: Response): Promise<void> {
  try {
    // REVIEW: Do we need to create UserLogin interface ?
    const userBody = req.body as User;
    const userToken = await userService.authenticateUser({
      email: userBody.email,
      password: userBody.password,
    });

    res.json({ token: userToken });
  } catch (error) {
    responseService.sendError(res, error);
  }
}

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const userBody = req.body as User;
    const userToken = await userService.createUser({
      email: userBody.email,
      password: userBody.position,
      firstname: userBody.firstname,
      lastname: userBody.lastname,
      position: userBody.position,
    });

    res.json({ token: userToken });
  } catch (error) {
    responseService.sendError(res, error);
  }
}
