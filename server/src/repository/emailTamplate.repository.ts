import EmailTemplate from "../models/emailTemplate";
import IEmailTemplate from "../interface/emailTemplate.interface";
import GenericRepository from "./generic.repository";

export default class EmailTemplateRepository extends GenericRepository<IEmailTemplate> {
  constructor() {
    super(EmailTemplate);
  }
}
