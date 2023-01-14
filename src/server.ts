import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import productsRouter from './routes/products'

const app: express.Application = express()
const address: string = "0.0.0.0:8000"

app.use(bodyParser.json())

app.use('/products', productsRouter)

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to StoreFront API')
})

app.listen(8000, function () {
    console.log(`starting app on: ${address}`)
})
