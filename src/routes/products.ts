import { Router } from "express";
import { getAll, getProduct, createProduct } from "../controllers/products";

const productsRouter = Router()

productsRouter.get('/', getAll)
productsRouter.get('/:id', getProduct)
productsRouter.post('/', createProduct)

export default productsRouter;