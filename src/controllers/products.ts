import { Request, Response } from "express";
import { Products } from "../models/product_model";

const products = new Products()

export const getAll = async ( req: Request, res : Response) => {
    try {
        const results = await products.index()
        res.send(results)
    } catch (error) {
        
    }
}

export const getProduct = async (req: Request, res : Response) => {
    try {
        const results = await products.show(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        
    }
}

export const createProduct = async (req: Request, res : Response) => {
    try {
        const results = await products.create(req.body)
        res.send(results)
    } catch (error) {
        throw new Error(`error creating product : ${error}`)
    }
}