import express from 'express'
import routerProducts from './routerProducts.js'
import routerCarts from './routerCarts.js'
const PORT = 4040


const app = express()

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use('/api/products', routerProducts)
app.use('/api/carts', routerCarts)


app.listen(PORT, () => {
    console.log(`Puerto ${PORT} activo :)`)
})
 