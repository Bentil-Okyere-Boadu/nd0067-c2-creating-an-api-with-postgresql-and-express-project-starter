import { Router } from "express";
import { getAllOrdersProducts, getByProductId, getByOrderId, createOrderProduct } from "../controllers/orders_products";

const orderProductRouter = Router()

orderProductRouter.post('/', createOrderProduct )
orderProductRouter.get('/product/:productId', getByProductId)
orderProductRouter.get('/order/:orderId', getByOrderId)
orderProductRouter.get('/', getAllOrdersProducts)

export default orderProductRouter