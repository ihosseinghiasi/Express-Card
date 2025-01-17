import express from "express";
import userProfileRoute from "./profile/profile.route";
import ticket from "./ticket/ticket.route";

const router = express.Router();

router.use("/profile", userProfileRoute);
router.use("/ticket", ticket);

export default router;
