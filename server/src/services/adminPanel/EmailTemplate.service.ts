import EmailTemplateRepository from "../../repository/emailTamplate.repository";
import IEmail from "../../interface/emailTemplate.interface";

export default class EmailTemplateService {
  private readonly emailTemplateRepository: EmailTemplateRepository;

  constructor() {
    this.emailTemplateRepository = new EmailTemplateRepository();
  }

  async create(data: IEmail): Promise<IEmail> {
    return this.emailTemplateRepository.create(data);
  }

  async findAll(): Promise<IEmail[] | null> {
    return this.emailTemplateRepository.findAll();
  }

  async findOne(id: string): Promise<IEmail | null> {
    return this.emailTemplateRepository.findById(id);
  }

  async update(id: string, data: IEmail): Promise<IEmail | null> {
    return this.emailTemplateRepository.update(id, data);
  }

  async delete(id: string): Promise<IEmail | null> {
    return this.emailTemplateRepository.delete(id);
  }
}
