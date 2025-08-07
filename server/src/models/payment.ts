import mongoose from "mongoose";
import IPayment from "../interface/payment.interface";

const paymentSchema = new mongoose.Schema({
  userFullName: { type: String, required: true },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  count: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const Payment = mongoose.model<IPayment>("Payment", paymentSchema, "Payment");
export default Payment;
