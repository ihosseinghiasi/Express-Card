import Payment from "../models/payment";
import IPayment from "../interface/payment.interface";
import GenericRepository from "./generic.repository";

export default class PaymentRepository extends GenericRepository<IPayment> {
  constructor() {
    super(Payment)
  }
}