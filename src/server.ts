import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import productsRouter from './routes/products'
import usersRouter from './routes/users'
import ordersRouter from './routes/orders'
import signIn from './services/signIn'
import verifyAuthToken from './middlewares/jwt_middleware'
import orderProductRouter from './routes/orders_products'

export const app: express.Application = express()
const address: string = "0.0.0.0:8000"

app.use(bodyParser.json())

app.use('/products', productsRouter)
app.use('/users', verifyAuthToken, usersRouter)
app.use('/orders', verifyAuthToken, ordersRouter)
app.use('/order-product', verifyAuthToken, orderProductRouter)
 
app.post('/login',signIn)

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to StoreFront API')
})

app.listen(8000, function () {
    console.log(`starting app on: ${address}`)
})
