import { NextFunction, Request, Response } from "express";
import { Products } from "../models/product_model";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";

const products = new Products()

export const getAll = async ( req: Request, res : Response, next: NextFunction) => {
    try {
        const results = await products.index()
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Error getting products`, StatusCodes.BAD_REQUEST))        
    }
}

export const getProduct = async (req: Request, res : Response, next: NextFunction) => {
    try {
        const results = await products.show(parseInt(req.params.id))
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Error getting product`, StatusCodes.BAD_REQUEST))   
    }
}

export const createProduct = async (req: Request, res : Response, next: NextFunction) => {
    try {
        const results = await products.create(req.body)
        res.send(results)
    } catch (error) {
        next(new CustomAPIError(`Error creating product`, StatusCodes.BAD_REQUEST))
    }
}