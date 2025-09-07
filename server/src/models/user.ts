import mongoose from "mongoose";
import IUser from "../interface/user.interface";

const userSchema = new mongoose.Schema({
  firstName: { type: String, minlength: 3, maxlength: 30, required: true },
  lastName: { type: String, minlength: 3, maxlength: 20, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
  department: { type: String },
  permissionAdmin: { type: Boolean },
  permissionProduct: { type: Boolean },
  permissionCard: { type: Boolean },
  permissionEmail: { type: Boolean },
  permissionReport: { type: Boolean },
  permissionTicket: { type: Boolean },
  permissionCategory: { type: Boolean },
  permissionUser: { type: Boolean },
  permissionPayment: { type: Boolean },
});

const User = mongoose.model<IUser>("User", userSchema, "User");
export default User;
