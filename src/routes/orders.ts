import { Router } from "express";
import { getAll, getOrder, createOrder } from "../controllers/orders";

const ordersRouter = Router()

ordersRouter.get('/:id', getOrder)
ordersRouter.post('/', createOrder)
ordersRouter.get('/', getAll)

export default ordersRouter