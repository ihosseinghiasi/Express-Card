import express from "express"
import authentication from "./authentication/authentication"
import persianDate from "./persianDate"
import adminPanel from "./adminPanel/adminPanel"
import userPanel from "./userPanel/userPanel"

const router = express.Router()

router.use("/", authentication);
router.use("/persianDate", persianDate);
router.use("/adminPanel", adminPanel);
router.use("/userPanel", userPanel);

export default router;
