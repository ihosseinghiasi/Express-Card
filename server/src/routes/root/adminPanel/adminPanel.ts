import express from "express"
import admin from "./admin/admin.route"
import user from "./user/user.route"
import category from "./category/category.route"
import product from "./product/product"
import card from "./card/card"


const router = express.Router()

router.use('/admin', admin)
router.use('/user', user)
router.use('/category', category)
router.use('/product', product)
router.use('/card', card)

export default router