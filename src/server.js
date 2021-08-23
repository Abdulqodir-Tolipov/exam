import express from "express"
import { host, PORT } from "./config.js"



import authModule from './modules/auth/index.js'
import postModule from './modules/auth/index.js'
import getCategories from "./modules/categories/index.js"
import getSubCategories from "./modules/subCategories/index.js"
import product from "./modules/products/index.js"

import checkToken from './middlewares/checkToken.js'

const app = express()

app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )
app.use( checkToken )


app.use( authModule )
app.use( postModule )
app.use( getCategories )
app.use( getSubCategories )
app.use( product )


app.listen(PORT, () => console.log('The server is runing on http://' + host + ":" + PORT ))