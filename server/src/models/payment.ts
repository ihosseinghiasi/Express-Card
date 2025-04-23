import mongoose from "mongoose";
import IPayment from "../interface/payment.interface";

const paymentSchema = new mongoose.Schema({
  userFullName: { type: String },
  userId: { type: String },
  title: { type: String },
  price: { type: Number },
  count: { type: Number },
  totalPrice: { type: Number },
});

const Payment = mongoose.model<IPayment>("Payment", paymentSchema, "Payment");
export default Payment;
