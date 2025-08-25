import mongoose from "mongoose";
import IUser from "../interface/user.interface";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: true },
  department: { type: String, required: true },
  permissionAdmin: { type: Boolean, default: false },
  permissionProduct: { type: Boolean, default: false },
  permissionCard: { type: Boolean, default: false },
  permissionEmail: { type: Boolean, default: false },
  permissionReport: { type: Boolean, default: false },
  permissionTicket: { type: Boolean, default: false },
  permissionCategory: { type: Boolean, default: false },
  permissionUser: { type: Boolean, default: false },
  permissionPayment: { type: Boolean, default: false },
});

const User = mongoose.model<IUser>("User", userSchema, "User");
export default User;
