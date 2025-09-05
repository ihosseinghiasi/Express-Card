import express from "express";
import authentication from "./authentication/authentication.route";
import persianDate from "./persianDate.route";
import adminPanel from "./adminPanel/adminPanel.route";
import userPanel from "./userPanel/userPanel.route";
import dashboard from "./dashboard.route";
import isLoggined from "../../middlewares/authentication";

const router = express.Router();

router.use("/dashboard", isLoggined, dashboard);
router.use("/authentication", isLoggined, authentication);
router.use("/persianDate", persianDate);
router.use("/adminPanel", isLoggined, adminPanel);
router.use("/userPanel", isLoggined, userPanel);

export default router;
