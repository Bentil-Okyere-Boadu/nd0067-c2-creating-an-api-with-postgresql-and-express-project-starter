import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";

dotenv.config()
const { TOKEN_SECRET } = process.env

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization
        //@ts-ignore
        const token = authHeader.split(' ')[1]
        
        // @ts-ignore
        const decoded = jwt.verify(token, TOKEN_SECRET)

        if(decoded){
            next()
        }else{ 
            next(new CustomAPIError('Invalid token, access denied.', StatusCodes.UNAUTHORIZED))
        }
    } catch (error) {
        next(new CustomAPIError('Invalid token, access denied.', StatusCodes.UNAUTHORIZED))
    }
}

export default verifyAuthToken