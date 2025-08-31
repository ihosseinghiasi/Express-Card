import express from "express";

import admin from "./admin/admin.route";
import user from "./user/user.route";
import category from "./category/category.route";
import product from "./product/product.route";
import card from "./card/card.route";
import ticket from "./ticket/ticket.route";
import emailTemplate from "./emailTemplate/emailTemplate.route";
import email from "./email/email.route";
import payment from "./payment/payment.route";
import isLoggined from "../../../middlewares/authentication";

const router = express.Router();

router.use("/admin", isLoggined, admin);
router.use("/user", isLoggined, user);
router.use("/category", category);
router.use("/product", product);
router.use("/card", card);
router.use("/ticket", ticket);
router.use("/emailTemplate", emailTemplate);
router.use("/payment", payment);
router.use("/email", email);

export default router;
