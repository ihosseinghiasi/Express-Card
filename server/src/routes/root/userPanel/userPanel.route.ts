import express from "express";
import profile from "./profile/profile.route";
import ticket from "./ticket/ticket.route";

const router = express.Router();

router.use("/profile", profile);
router.use("/ticket", ticket);

export default router;
