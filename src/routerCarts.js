import { Router } from "express"
import { Cart } from "./Carts.js"
import { cartManager } from "./managers/FileManager.js"

const routerCarts = Router()

routerCarts.post('/', (res, req) => {
    const newCart = req.body
    cartManager.addCart(newCart)
    res.json(newCart)
})



export default routerCarts