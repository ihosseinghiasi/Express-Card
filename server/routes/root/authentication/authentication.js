const {
  verifyCodeSms,
  confirmVerifyCodeSms,
  login,
  register,
} = require("../../../controllers/authentication/authenticationController");
const { checkUser } = require("../../../middlewares/checkUserAuthenticate");
const router = require("express").Router();

router.post("/", checkUser);
router.post("/sms", verifyCodeSms);
router.post("/confirmSms", confirmVerifyCodeSms);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
