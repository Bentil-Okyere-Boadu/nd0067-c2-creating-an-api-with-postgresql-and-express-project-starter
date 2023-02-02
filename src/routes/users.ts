import { Router } from "express";
import { getAll, getUser, createUser } from "../controllers/users";
import verifyAuthToken from "../middlewares/jwt_middleware";

const usersRouter = Router()

usersRouter.get('/:id', verifyAuthToken,  getUser)
usersRouter.post('/', createUser)
usersRouter.get('/', verifyAuthToken,  getAll)

export default usersRouter