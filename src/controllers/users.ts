import { Response, Request } from "express";
import { Users } from "../models/user_model";

const users = new Users()

export const getAll = async ( req : Request, res: Response) => {
    try {
        const results = await users.index()
        res.send(results)
    } catch (error) {
        
    }
}

export const getUser = async ( req: Request, res: Response) => {
    try {
        const results = await users.show(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        
    }
}

export const createUser = async ( req: Request, res: Response) => {
    try {
        const results = await users.create(req.body)
        res.send(results)
    } catch (error) {
        throw new Error(`error: ${error}`);
    }
}