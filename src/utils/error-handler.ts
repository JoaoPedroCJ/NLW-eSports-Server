import { Express, Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

export default (app: Express): void => {
  app.use(
    (err: Error, _request: Request, response: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message,
        });
      }

      return response.status(500).json({
        message: 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { error: err.stack }),
      });
    },
  );
};
