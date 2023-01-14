import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

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
        } 
    } catch (error) {
        res.status(401)
    }
}

export default verifyAuthToken