import { Request, Response } from "express";
import { OrdersProducts } from "../models/order_product_model";

const order_product = new OrdersProducts()

export const getAllOrdersProducts = async( req: Request, res: Response) => {
    try {
        const allOrdersProducts = await order_product.getAll()
        res.send(allOrdersProducts)
    } catch (error) {
        
    }
}

export const getByOrderId = async (req: Request, res: Response) => {
    try {
        const ordersById =  await order_product.getByOrderId(parseInt(req.params.orderId))
        res.send(ordersById)
    } catch (error) {
        
    }
}

export const getByProductId = async (req: Request, res: Response) => {
    try {
        const productsById =  await order_product.getByProductId(parseInt(req.params.productId))
        res.send(productsById)
    } catch (error) {
        
    }
}

export const createOrderProduct = async (req: Request, res: Response) => {
    try {
        const newOrderProduct = await order_product.createOrderProduct(req.body)
        res.send(newOrderProduct)
    } catch (error) {
        
    }
}