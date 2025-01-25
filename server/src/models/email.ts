import mongoose from "mongoose";
import IEmail from "../interface/emailTemplate.interface";

const emailTemplateSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

const Email = mongoose.model<IEmail>(
  "emailTemplate",
  emailTemplateSchema,
  "emailTemplate"
);

export default Email;
