import { NextFunction, Request, Response } from 'express';
import CustomAPIError from '../errors/custom-error';

const errorHandler = (err: CustomAPIError, _req: Request, res: Response, next: NextFunction) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Something went wrong.'

     res.status(status).json({ 
      status: status,
      message: message
    });
};

export default errorHandler;