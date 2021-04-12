import { NextFunction, Request, Response } from 'express';

import { ApiError } from '@core/models';
import { validationService } from '@core/services';

export function readMany(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // Nothing to validate
  next();
}

// TODO: Pas suffisant il faut utiliser un middleware pour vérifier s'il y a une erreur
// ou bien directement utiliser responseService.sendError();
export function readOne(req: Request, res: Response, next: NextFunction): void {
  if (!validationService.isValidId(req.params.id)) {
    throw new ApiError(400, 'invalid_user_id');
  }

  next();
}
