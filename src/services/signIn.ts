import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Client from "../database";

dotenv.config()
const { TOKEN_SECRET, BCRYPT_PASSWORD } = process.env

const signIn = async (req: Request, res: Response ) => {
    try {
      const { firstname, password } = req.body
    //@ts-ignore
    const pool = Client.connect()
    const sql = 'SELECT * FROM users WHERE firstname=$1;';
    const results = (await pool).query(sql,[firstname])
    const user = JSON.parse(JSON.stringify( (await results).rows[0]))
    if(!user){
        res.status(401).send('User does not exist')
    }
    
    const pass = await bcrypt.compare( password+BCRYPT_PASSWORD , user.password)

    if(user && pass){
        // @ts-ignore
        const token = jwt.sign(user, TOKEN_SECRET)
        res.send({user: user , token: token})
    } else{
        res.status(401).send('Invalid password')
    }
  
    } catch (error) {
        throw new Error(`error signing in : ${error}`)
    }
    
}

export default signIn