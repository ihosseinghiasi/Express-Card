import EmailTemplateRepository from "../../repository/emailTamplate.repository";
import IEmailTemplate from "../../interface/emailTemplate.interface";

export default class EmailTemplateService {
  private readonly emailTemplateRepository: EmailTemplateRepository;

  constructor() {
    this.emailTemplateRepository = new EmailTemplateRepository();
  }

  async create(data: IEmailTemplate): Promise<IEmailTemplate> {
    return this.emailTemplateRepository.create(data);
  }

  async findAll(): Promise<IEmailTemplate[] | null> {
    return this.emailTemplateRepository.findAll();
  }

  async findOne(id: string): Promise<IEmailTemplate | null> {
    return this.emailTemplateRepository.findById(id);
  }

  async update(
    id: string,
    data: IEmailTemplate
  ): Promise<IEmailTemplate | null> {
    return this.emailTemplateRepository.update(id, data);
  }

  async delete(id: string): Promise<IEmailTemplate | null> {
    return this.emailTemplateRepository.delete(id);
  }
}
