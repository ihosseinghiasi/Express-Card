import mongoose from "mongoose";
import IPayment from "../interface/payment.interface";

const paymentSchema = new mongoose.Schema({
  userFullName: { type: String },
  userId: { type: String },
  title: { type: String },
  price: { type: Number },
  totalPrice: { type: Number },
  resnumber: { type: String },
  payment: { type: Boolean, default: false },
  isNewPaymentForAdmin: { type: Boolean, default: true },
  isNewPaymentForUser: { type: Boolean, default: true },
});

const Payment = mongoose.model<IPayment>("Payment", paymentSchema, "Payment");
export default Payment;
