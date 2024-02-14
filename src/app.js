 
import express from "express";
import productsRouter from './routes/ProductsRouter.js';
import { __dirname } from "./path.js";
import upload from "./config/multer.js";

console.log(__dirname)

const app = express()
const PORT = 11000

app.use(express.json())
app.use('/static', express.static(__dirname + '/public'))


app.use('/products', productsRouter)
app.post('/upload', upload.single('product'), (req, res) => {
    try {
        console.log(req.file)
        res.status(200).send("Imagen cargada correctamente")
    } catch (e) {
        res.status(500).send("Error al cargar imagen")
    }
})

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`)
})


