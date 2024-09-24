const router = require('express').Router()
const { persianDate } = require('../../controllers/persianDate')

router.get('/', persianDate)

module.exports = router
