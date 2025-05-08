import express from "express";
import userProfileRoute from "./profile/profile.route";
import ticket from "./ticket/ticket.route";
import email from "./email/email.route";
import payment from "./payment/payment.route";

const router = express.Router();

router.use("/profile", userProfileRoute);
router.use("/ticket", ticket);
router.use("/email", email);
router.use("/payment", payment);

export default router;
