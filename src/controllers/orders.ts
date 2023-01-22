import { Request, Response } from "express";
import { Orders } from "../models/order_model";

const orders = new Orders()

export const getAll = async ( req: Request, res: Response) => {
    try {
        const results = await orders.index()
        res.send(results)
    } catch (error) {
        
    }
}

export const getOrder = async (req: Request, res : Response) => {
    try {
        const results = await orders.show(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        
    }
}

export const createOrder = async (req: Request, res : Response) => {
    try {
        const results = await orders.create(req.body)
        res.send(results)
    } catch (error) {
        throw new Error(`error creating product : ${error}`)
    }
}

export const getUserOrder =async (req:Request, res: Response) => {
    try {
        const results = await orders.userOrder(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        throw new Error(`Couldnt get user orders : ${error}`)
    }
    
}