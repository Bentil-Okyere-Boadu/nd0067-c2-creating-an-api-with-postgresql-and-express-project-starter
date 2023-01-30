import { NextFunction, Request, Response } from "express";
import { OrdersProducts } from "../models/order_product_model";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";

const order_product = new OrdersProducts()

export const getAllOrdersProducts = async( req: Request, res: Response, next: NextFunction) => {
    try {
        const allOrdersProducts = await order_product.getAll()
        res.send(allOrdersProducts)
    } catch (error) {
        next(new CustomAPIError('Could not get orders', StatusCodes.BAD_REQUEST))        
    }
}

export const getByOrderId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ordersById =  await order_product.getByOrderId(parseInt(req.params.orderId))
        res.send(ordersById)
    } catch (error) {
        next(new CustomAPIError('Could not get orders by order ID', StatusCodes.BAD_REQUEST))
    }
}

export const getByProductId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productsById =  await order_product.getByProductId(parseInt(req.params.productId))
        res.send(productsById)
    } catch (error) {
        next(new CustomAPIError('Could not get orders by product ID', StatusCodes.BAD_REQUEST))        
    }
}

export const createOrderProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newOrderProduct = await order_product.createOrderProduct(req.body)
        res.send(newOrderProduct)
    } catch (error) {
        next(new CustomAPIError('Could not create orders.', StatusCodes.BAD_REQUEST))
    }
}