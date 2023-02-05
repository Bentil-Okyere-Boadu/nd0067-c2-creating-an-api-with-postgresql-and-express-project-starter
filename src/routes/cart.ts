import { Router } from "express";
import { getAllOrdersProducts, getByProductId, getByOrderId, addToCart, removeFromCart } from "../controllers/cart";

const cartRouter = Router()

cartRouter.post('/:userId', addToCart )
cartRouter.delete('/:orderId/:productId', removeFromCart )
cartRouter.get('/product/:productId', getByProductId)
cartRouter.get('/order/:orderId', getByOrderId)
cartRouter.get('/', getAllOrdersProducts)

export default cartRouter