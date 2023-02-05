import { Router } from "express";
import { getAllOrdersProducts, addToCart, removeFromCart, viewCartForOrder, updateQuantity } from "../controllers/cart";

const cartRouter = Router()

cartRouter.post('/:userId', addToCart )
cartRouter.delete('/:orderId/:productId', removeFromCart )
cartRouter.put('/:orderId/:productId', updateQuantity )
cartRouter.get('/order/:orderId', viewCartForOrder)
cartRouter.get('/', getAllOrdersProducts)

export default cartRouter