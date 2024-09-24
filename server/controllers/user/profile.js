const User = require("../../models/user");

module.exports.profile = async (req, res, next) => {
  try {
    const { _id, firstName, lastName, email, phoneNumber, password } = req.body;
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };
    const updatedUser = await User.updateOne({ _id: _id }, { $set: data });
    if (updatedUser.acknowledged) {
      return res.json({ status: "OK" });
    }
  } catch (err) {
    next(err);
  }
};
