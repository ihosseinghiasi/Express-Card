import express from "express";
import admin from "./admin/admin.route";
import user from "./user/user.route";
import category from "./category/category.route";
import product from "./product/product.route";
import card from "./card/card.route";
import ticket from "./ticket/ticket.route";

const router = express.Router();

router.use("/admin", admin);
router.use("/user", user);
router.use("/category", category);
router.use("/product", product);
router.use("/card", card);
router.use("/ticket", ticket);

export default router;
