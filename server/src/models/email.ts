import mongoose from "mongoose";
import IEmail from "../interface/email.interface";

const emailSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  target: { type: String },
});

const Email = mongoose.model<IEmail>("email", emailSchema, "email");

export default Email;
