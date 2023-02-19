import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import productsRouter from './routes/products'
import usersRouter from './routes/users'
import ordersRouter from './routes/orders'
import signIn from './services/signIn'
import verifyAuthToken from './middlewares/jwt_middleware'
import cartRouter from './routes/cart'
import errorHandler from './middlewares/error_middleware'

export const app: express.Application = express()
const port : number = process.env.PORT? parseInt(process.env.PORT) : 8000;

app.use(bodyParser.json())

app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/orders', verifyAuthToken, ordersRouter)
app.use('/cart', verifyAuthToken, cartRouter)

app.post('/login',signIn)

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to StoreFront API')
})

app.use(errorHandler)

app.listen(port, function () {
    console.log(`starting app on: ${port}`)
})
