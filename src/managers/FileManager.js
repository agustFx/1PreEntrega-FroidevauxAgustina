import fs from 'fs'
import  Product  from '../Products.js'
import  { Cart } from '../Carts.js'

class FileManager{
    constructor(path){
        this.path = path
    }

    async addCart({id, quantity}){
        const carts = []

        const cart = new Cart(id, quantity)
        carts.push(cart)

        const cartsJson = JSON.stringify(carts)

        await fs.promises.writeFile(this.path, cartsJson)
    }

    async addProduct({id, title, description, price, thumbnail, code, stock}){
        const products = []

        const product = new Product(id, title, description, price, thumbnail, code, stock)
        products.push(product)

        const productsJson = JSON.stringify(products)

        await fs.promises.writeFile(this.path, productsJson)
    }

    async getProducts(){
        const elements = await fs.promises.readFile(this.path, 'utf-8')
        console.log('Obtener productos', JSON.parse(elements))
        return elements
    }

    async getProductsById(){
        const elements = await fs.promises.readFile(this.path, 'utf-8')
        elements = JSON.parse(elements)

        const isId = elements.find((e) => e.id === id)
        if(isId){
            console.log("Producto buscado por id:", isId)
            return isId      
        } else{
            throw new Error ("Id no encontrado")
        }
    }

    async updateProduct(id, dataToUpdate){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter((item) => item.id !== id)
        newData = [...newData, {id, ...dataToUpdate}]
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }

    async deleteProduct(id){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter((item) => item.id !== id)
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }
}

export const productManager = new FileManager('src/database/products.json')
export const cartManager = new FileManager('src/database/carts.json')

productManager.addProduct({id: '1', title: 'Producto 1', description: 'Este es un producto y es el número 1', price: 200, thumbnail: '', code: 450, stock: '20'})
productManager.addProduct({id: '2', title: 'Producto 2', description: 'Este es un producto y es el número 2', price: 220, thumbnail: '', code: 350, stock: '30'})
productManager.addProduct({id: '3', title: 'Producto 3', description: 'Este es un producto y es el número 3', price: 230, thumbnail: '', code: 250, stock: '40'})
productManager.addProduct({id: '4', title: 'Producto 4', description: 'Este es un producto y es el número 4', price: 240, thumbnail: '', code: 150, stock: '10'})

productManager.getProducts("Product")


cartManager.addProduct({id: '1', title: 'Producto 1', description: 'Este es un producto y es el número 1', price: 200, thumbnail: '', code: 450, stock: '20'})
cartManager.addProduct({id: '2', title: 'Producto 2', description: 'Este es un producto y es el número 2', price: 220, thumbnail: '', code: 350, stock: '30'})
cartManager.addProduct({id: '3', title: 'Producto 3', description: 'Este es un producto y es el número 3', price: 230, thumbnail: '', code: 250, stock: '40'})
cartManager.addProduct({id: '4', title: 'Producto 4', description: 'Este es un producto y es el número 4', price: 240, thumbnail: '', code: 150, stock: '10'})

cartManager.getProducts("Cart")