import { Request, Response } from 'express';

import { responseService } from '@core/services';
import {
  authenticateUser,
  createUser,
  User,
  UserCredentials,
} from '@core/modules/User';

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const userBody = req.body as UserCredentials;
    const userToken = await authenticateUser({
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
    const userToken = await createUser({
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
