import express from "express";
import authentication from "./authentication/authentication.route";
import persianDate from "./persianDate.route";
import adminPanel from "./adminPanel/adminPanel.route";
import userPanel from "./userPanel/userPanel.route";
import dashboard from "./dashboard.route";

const router = express.Router();

router.use("/", dashboard);
router.use("/authentication", authentication);
router.use("/persianDate", persianDate);
router.use("/adminPanel", adminPanel);
router.use("/userPanel", userPanel);

export default router;
