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
        }else{ 
            res.status(401).send('Invalid token, access denied.')
        }
    } catch (error) {
        res.status(401).send('Invalid token, access denied.')
    }
}

export default verifyAuthToken