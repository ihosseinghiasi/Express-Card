import mongoose from "mongoose";
import IEmail from "../interface/email.interface";

const emailSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  target: { type: String, required: true },
});

const Email = mongoose.model<IEmail>("email", emailSchema, "email");

export default Email;
