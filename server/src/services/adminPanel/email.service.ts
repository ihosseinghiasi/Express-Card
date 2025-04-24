import EmailRepository from "../../repository/email.repository";
import IEmail from "../../interface/email.interface";

export default class EmailService {
  private readonly emailRepository: EmailRepository;

  constructor() {
    this.emailRepository = new EmailRepository();
  }

  async create(data: IEmail): Promise<IEmail | null> {
    return this.emailRepository.create(data);
  }

  async findAll(): Promise<IEmail[] | null> {
    return this.emailRepository.findAll();
  }

  async findOne(id: string): Promise<IEmail | null> {
    return this.emailRepository.findById(id);
  }

  async delete(id: string): Promise<IEmail | null> {
    return this.emailRepository.delete(id);
  }
}
