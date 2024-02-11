
import express from 'express';
import { ProductManager } from "./config/ProductManager.js";

const app = express()
const PORT = 11000
const PRODUCTMANAGER = new ProductManager("./src/db/products.json")

app.get('/', (req, res) => {
    res.send("Bienvenidos a mi primer servidor hecho con Express.")
}) 

app.get('/products', async (req, res) => {
    const { limit } = req.query
    
    const productos = await PRODUCTMANAGER.getProducts()
    const limite = parseInt(limit)
    if (limite) { 
        if (limite < 0){
            res.send("Por favor ingresar un número válido - Queries")
            }else{
            const productosLimite = productos.slice(0, limit)
            res.send(productosLimite)
            }

        } else {
            res.send("Ingrese un valor valido - Queries")
        }
})

app.get('/products/:pid', async (req, res) => {
    const idProducto = req.params.pid
    const producto = await PRODUCTMANAGER.getProductsById(idProducto)
    res.send(producto)
})


app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`)
})


