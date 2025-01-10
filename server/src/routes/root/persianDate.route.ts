import express from "express"
const router = express.Router()
import PersianDate from "../../config/persianDate"

router.get('/', persianDate)

export default router
