import express from "express";
import userProfileRoute from "./profile/profile.route";
import ticket from "./ticket/ticket.route";
import email from "./email/email.route";

const router = express.Router();

router.use("/profile", userProfileRoute);
router.use("/ticket", ticket);
router.use("/email", email);

export default router;
