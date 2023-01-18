import { Router } from "express";
import { getAll, getProduct, createProduct } from "../controllers/products";
import verifyAuthToken from "../middlewares/jwt_middleware";

const productsRouter = Router()

productsRouter.get('/:id', getProduct)
productsRouter.post('/', verifyAuthToken, createProduct)
productsRouter.get('/', getAll)

export default productsRouter;