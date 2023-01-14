import { Router } from "express";
import { getAll, getProduct, createProduct } from "../controllers/products";

const productsRouter = Router()

productsRouter.get('/:id', getProduct)
productsRouter.post('/', createProduct)
productsRouter.get('/', getAll)

export default productsRouter;