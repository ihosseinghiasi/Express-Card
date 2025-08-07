import mongoose from "mongoose";
import IUser from "../interface/user.interface";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema, "User");
export default User;
