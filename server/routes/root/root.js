const router = require("express").Router();

router.use("/", require("./authentication/authentication"));
router.use("/persianDate", require("./persianDate"));
router.use("/adminPanel", require("./adminPanel/adminPanel"));
router.use("/userPanel", require("./userPanel/userPanel"));

module.exports = router;
