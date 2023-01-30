import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Client from "../database";
import { StatusCodes } from "http-status-codes";
import CustomAPIError from "../errors/custom-error";

dotenv.config()
const { TOKEN_SECRET, BCRYPT_PASSWORD } = process.env

const signIn = async (req: Request, res: Response, next: NextFunction ) => {
    try {
      const { firstname, password } = req.body
    //@ts-ignore
    const pool = Client.connect()
    const sql = 'SELECT * FROM users WHERE firstname=$1;';
    const results = (await pool).query(sql,[firstname])
    const user = JSON.parse(JSON.stringify( (await results).rows[0]))
    if(!user){
        next(new CustomAPIError('User does not exist', StatusCodes.NOT_FOUND))
    }
    
    const pass = await bcrypt.compare( password+BCRYPT_PASSWORD , user.password)

    if(user && pass){
        // @ts-ignore
        const token = jwt.sign(user, TOKEN_SECRET)
        res.status(StatusCodes.OK).send({user: user , token: token})
    } else{
        next(new CustomAPIError('Invalid password', StatusCodes.NOT_FOUND))
    }
  
    } catch (error) {
        next(new CustomAPIError(`Something went wrong.`, StatusCodes.INTERNAL_SERVER_ERROR))        
    }
    
}

export default signIn