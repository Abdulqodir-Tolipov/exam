import express from 'express'
import { getSubCategories } from './cantroller.js'
const router = express.Router()

import { categoriesAdd, categoryQuery, categoryParams, geta } from './cantroller.js'

router.route('/categories')
    .post(categoriesAdd)

router.route('/readCategories')
    .get(categoryQuery)

router.route('/readCategories')
    .get(categoryParams)

router.route('/categories')
    .get(geta)

router.route('/subcategories')
    .get(getSubCategories)

export default router  