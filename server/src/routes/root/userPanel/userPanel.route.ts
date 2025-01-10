import express from "express"
import profile from "./profile/profile.route"
import ticket from "./ticket/ticket.route"

// const { checkUser } = require("../../../middlewares/checkUserAuthenticate");

const router = express.Router()

// router.get("/", checkUser);
// router.use('/counter', )
router.use("/profile", profile);
router.use("/ticket", ticket);

export default router;
