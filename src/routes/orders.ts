import { Router } from "express";
import { getAll, getOrder, createOrder, getUserOrder } from "../controllers/orders";

const ordersRouter = Router()

ordersRouter.get('/user/:id', getUserOrder)
ordersRouter.get('/:id', getOrder)
ordersRouter.post('/', createOrder)
ordersRouter.get('/', getAll)

export default ordersRouter