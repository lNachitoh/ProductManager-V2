import { Router } from "express"
import ProductManager from "../ProductManager.js"

const router = Router()
const productManager = new ProductManager('./Productos.json')


router.get('/', async (req,res)=>{
    const productsList = await productManager.getProducts()
    res.status(200).render("home",{products: productsList})
})

router.get('/realtimeproducts', async (req,res)=>{
    const productsList = await productManager.getProducts()
    //console.log(productsList)
    res.status(200).render("realTimeProducts",{products: productsList})
})

export default router