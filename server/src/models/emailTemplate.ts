import mongoose from "mongoose";
import IEmailTemplate from "../interface/emailTemplate.interface";

const emailTemplateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const EmailTemplate = mongoose.model<IEmailTemplate>(
  "emailTemplate",
  emailTemplateSchema,
  "emailTemplate"
);

export default EmailTemplate;
