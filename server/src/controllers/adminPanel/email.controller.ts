import { Request, Response } from "express";
import IEmail from "../../interface/email.interface";
import IEmailTemplate from "../../interface/emailTemplate.interface";
import EmailService from "../../services/adminPanel/email.service";
import EmailTemplateService from "../../services/adminPanel/emailTemplate.service";
import CardService from "../../services/adminPanel/card.service";
import emailSender from "../../config/email";

export default class EmailController {
  private readonly emailService: EmailService;
  private readonly emailTemplateService: EmailTemplateService;
  private readonly cardService: CardService;

  constructor() {
    this.emailService = new EmailService();
    this.emailTemplateService = new EmailTemplateService();
    this.cardService = new CardService();
  }

  async create(req: Request, res: Response) {
    try {
      const paymentData = req.body.data;
      const emailTemplate: IEmailTemplate | null =
        await this.emailTemplateService.findOne("680a33ec507f5517e73dd5f9");
      const cards = await this.cardService.findAll();
      const selectedCards = cards?.filter((card) => {
        return (
          card.cardProduct === paymentData.title && card.cardStatus === "فعال"
        );
      });
      const selectedCardsForSelling = selectedCards?.slice(
        0,
        paymentData.count
      );
      if (selectedCardsForSelling) {
        Object.values(selectedCardsForSelling).forEach((card) => {
          const fields: string[] = [];
          console.log(card);
          // Object.values(card.cardFields).forEach((field) => {
          //   console.log(field);
          //   fields.push(field);
          // });

          console.log(fields);
          // if (fields && emailTemplate) {
          //   emailSender(
          //     paymentData.userFullName,
          //     "hosseinghiasi.dev@gmail.com",
          //     emailTemplate,
          //     fields,
          //   );
          // }
        });
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAllAdmins(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAdmin(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteAdmin(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
