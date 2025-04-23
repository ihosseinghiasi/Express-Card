import IPayment from "../../interface/payment.interface";
import PaymentRepository from "../../repository/payment.repository";

export default class PaymentService {
  private readonly paymentRepository: PaymentRepository;

  constructor() {
    this.paymentRepository = new PaymentRepository();
  }

  async create(data: IPayment): Promise<IPayment | null> {
    return this.paymentRepository.create(data);
  }

  async findAll(): Promise<IPayment[] | null> {
    return this.paymentRepository.findAll();
  }

  async findById(id: string): Promise<IPayment | null> {
    return this.paymentRepository.findById(id);
  }

  async update(id: string, data: IPayment): Promise<IPayment | null> {
    return this.paymentRepository.update(id, data);
  }

  async delete(id: string): Promise<IPayment | null> {
    return this.paymentRepository.delete(id);
  }
}
