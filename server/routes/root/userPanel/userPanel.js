const router = require("express").Router();
const { checkUser } = require("../../../middlewares/checkUserAuthenticate");

router.get("/", checkUser);
// router.use('/counter', )
router.use("/profile", require("./profile/profile"));
router.use("/ticket", require("./ticket/ticket"));

module.exports = router;
