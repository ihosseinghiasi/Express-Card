import mongoose from "mongoose";
import IPayment from "../interface/payment.interface";

const paymentSchema = new mongoose.Schema({
  count: { type: Number },
  title: { type: String },
  purePrice: { type: Number },
  totalPrice: { type: Number },
  periodOfTime: { type: Number },
  resnumber: { type: String },
  payment: { type: Boolean, default: false },
  isNewPaymentForAdmin: { type: Boolean, default: true },
  isNewPaymentForUser: { type: Boolean, default: true },
});

const Payment = mongoose.model<IPayment>("Payment", paymentSchema, "Payment");
export default Payment;
