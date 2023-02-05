import { NextFunction, Request, Response } from "express";
import { Carts } from "../models/cart_model";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";
import { Order, Orders } from "../models/order_model";
import { Order_Status } from "../utils/orderStatus";

const cart = new Carts()
const order = new Orders()

export const getAllOrdersProducts = async( req: Request, res: Response, next: NextFunction) => {
    try {
        const allOrdersProducts = await cart.getAll()
        res.send(allOrdersProducts)
    } catch (error) {
        next(new CustomAPIError('Could not get orders', StatusCodes.BAD_REQUEST))        
    }
}


export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { orderId } = req.body

        if(orderId){
            const newOrderProduct = await cart.addToCart(req.body)
            res.send(newOrderProduct)
        } else {
            const userId = parseInt(req.params.userId)
            const status = Order_Status.New;
            const newOrder: Order = await order.create({user_id: userId, status: status})
            const newOrderProduct = await cart.addToCart({...req.body, orderId: newOrder.id})
            res.send(newOrderProduct)
        }
    } catch (error) {
        next(new CustomAPIError('Could not add to cart.', StatusCodes.BAD_REQUEST))
    }
}

export const removeFromCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {productId, orderId} = req.params
        const result = await cart.removeFromCart(parseInt(orderId), parseInt(productId))
        res.send(result)
    } catch (error) {
        next(new CustomAPIError('Could not remove from cart.', StatusCodes.BAD_REQUEST))
    }
}

export const updateQuantity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {productId, orderId} = req.params
        const { quantity } = req.body
        const result = await cart.updateQuantity(parseInt(orderId), parseInt(productId), +quantity )
        res.send(result)
    } catch (error) {
        next(new CustomAPIError('Could not remove from cart.', StatusCodes.BAD_REQUEST))
    }
}

export const viewCartForOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { orderId } = req.params
        const result = await cart.viewCart(parseInt(orderId))
        res.send(result)
    } catch (error) {
        next(new CustomAPIError('Could not retrieve cart data for order.', StatusCodes.BAD_REQUEST))
    }
}