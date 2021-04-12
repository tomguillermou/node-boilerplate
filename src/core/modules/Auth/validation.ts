import { NextFunction, Request, Response } from 'express';

import { validationService, responseService } from '@core/services';
import { User } from '../User/interfaces';

export function loginValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Nothing to validate
    next();
  } catch (error) {
    responseService.sendError(res, error);
  }
}

export function registerValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    const user = req.body as User;
    validationService.isValidEmail(user.email);
    // validationService.isValidPassword(req.body.password);
    next();
  } catch (error) {
    responseService.sendError(res, error);
  }
}
