import getProduct from "./controller.js";
import express from "express"
const router = express.Router()

router.get('/product', getProduct)

export default router