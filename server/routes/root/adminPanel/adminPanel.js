const router = require('express').Router()

router.use('/admin', require('./admin/admin'))
router.use('/user', require('./user/user'))
router.use('/category', require('./category/category'))
router.use('/product', require('./product/product'))
router.use('/card', require('./card/card'))

module.exports = router