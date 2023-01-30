import { NextFunction, Request, Response } from "express";
import { Orders } from "../models/order_model";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";

const orders = new Orders()

export const getAll = async ( req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await orders.index()
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Unable to get orders`, StatusCodes.NOT_FOUND)) 
    }
}

export const getOrder = async (req: Request, res : Response, next: NextFunction) => {
    try {
        const results = await orders.show(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Unable to get order`, StatusCodes.NOT_FOUND)) 
    }
}

export const createOrder = async (req: Request, res : Response, next: NextFunction) => {
    try {
        const results = await orders.create(req.body)
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Unable to create order`, StatusCodes.BAD_REQUEST)) 
    }
}

export const getUserOrder =async (req:Request, res: Response, next: NextFunction) => {
    try {
        const results = await orders.userOrder(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Unable to get user's order`, StatusCodes.NOT_FOUND))
    }
    
}