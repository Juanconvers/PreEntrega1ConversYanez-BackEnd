 
import express from "express";
import productsRouter from './routes/ProductsRouter.js';

const app = express()
const PORT = 11000

app.use(express.json())
app.use('/products', productsRouter)

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`)
})


