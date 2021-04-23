import { NextFunction, Request, Response } from 'express';

import { ApiError } from '@core/models/ApiError';
import { jwtService, responseService } from '@core/services';

import { findUser } from '@core/modules/User';

const {
  HTTP_CODES: { BAD_REQUEST, FORBIDDEN },
} = responseService;

/**
 * Check authorization header format
 *
 * @param authorizationHeader string
 * @returns token
 */
function checkAuthorizationHeader(
  authorizationHeader: string | undefined,
): string {
  if (!authorizationHeader) {
    throw new ApiError(BAD_REQUEST, 'missing_authorization_header');
  }

  const bearerTester = new RegExp(
    /^Bearer [A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
  );
  if (!bearerTester.test(authorizationHeader)) {
    throw new ApiError(BAD_REQUEST, 'invalid_authorization_header');
  }

  const token = authorizationHeader.split(' ').pop();
  if (!token) {
    throw new ApiError(BAD_REQUEST, 'invalid_authorization_header');
  }

  return token;
}

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const token = checkAuthorizationHeader(req.headers.authorization);
    const decodedToken = jwtService.verify(token);
    const authUser = await findUser(decodedToken);

    if (!authUser) {
      throw new ApiError(FORBIDDEN, 'authentication_failed');
    }

    res.locals.authUser = authUser;

    next();
  } catch (error) {
    responseService.sendError(res, error);
  }
}
