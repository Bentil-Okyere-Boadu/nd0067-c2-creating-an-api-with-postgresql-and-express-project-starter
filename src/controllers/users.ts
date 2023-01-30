import { Response, Request, NextFunction } from "express";
import { Users } from "../models/user_model";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";

const users = new Users()

export const getAll = async ( req : Request, res: Response, next: NextFunction) => {
    try {
        const results = await users.index()
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Error getting users`, StatusCodes.BAD_REQUEST))        
    }
}

export const getUser = async ( req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await users.show(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Error getting user.`, StatusCodes.BAD_REQUEST))             
    }
}

export const createUser = async ( req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await users.create(req.body)
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Error creating user.`, StatusCodes.BAD_REQUEST))        

    }
}