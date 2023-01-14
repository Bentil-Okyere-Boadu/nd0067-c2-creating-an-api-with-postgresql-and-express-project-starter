import { Router } from "express";
import { getAll, getUser, createUser } from "../controllers/users";

const usersRouter = Router()

usersRouter.get('/:id', getUser)
usersRouter.post('/', createUser)
usersRouter.get('/', getAll)

export default usersRouter