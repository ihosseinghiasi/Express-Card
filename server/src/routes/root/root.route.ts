import express from "express";
import authentication from "./authentication/authentication.route";
// import persianDate from "./persianDate.route";
import adminPanel from "./adminPanel/adminPanel.route";
import userPanel from "./userPanel/userPanel.route";

const router = express.Router();

router.use("/", authentication);
// router.use("/persianDate", persianDate);
router.use("/adminPanel", adminPanel);
router.use("/userPanel", userPanel);

export default router;
