import { Response } from 'express';

import { ApiError } from '@core/models/ApiError';

export const HTTP_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export function sendError(res: Response, error: Error | ApiError): void {
  if (process.env.NODE_ENV === 'development') {
    console.error(error);
  }

  if (error instanceof ApiError) {
    res.status(error.httpCode).json({ code: error.code });
  } else {
    res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .json({ code: 'internal_server_error' });
  }
}

export function sendJson(res: Response, data: unknown): void {
  res.status(HTTP_CODES.SUCCESS).json({
    success: true,
    data,
  });
}
