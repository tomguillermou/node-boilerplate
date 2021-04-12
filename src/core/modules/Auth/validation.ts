import { NextFunction, Request, Response } from 'express';

import { validationService, responseService } from '@core/services';

export async function loginValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    // Nothing to validate
    next();
  } catch (error) {
    responseService.sendError(res, error);
  }
}

export async function registerValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    validationService.isValidEmail(req.body.email);
    // validationService.isValidPassword(req.body.password);
    next();
  } catch (error) {
    responseService.sendError(res, error);
  }
}
