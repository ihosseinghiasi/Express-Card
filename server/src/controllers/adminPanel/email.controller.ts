import { Request, Response } from "express";
import IEmail from "../../interface/email.interface";
import IEmailTemplate from "../../interface/emailTemplate.interface";
import EmailService from "../../services/adminPanel/email.service";
import EmailTemplateService from "../../services/adminPanel/emailTemplate.service";
import CardService from "../../services/adminPanel/card.service";
import emailSender from "../../config/email";
import ICard from "../../interface/card.interface";
import { replaceEmailTemplatePatterns } from "../../config/replaceEmailTemplatePattern";
import response from "../../config/response";

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
      if (!emailTemplate) {
        return response(res, 404, "Email Template Not Successfuly Founded.");
      }
      const cards = await this.cardService.findAll();
      if (!cards) {
        return response(res, 404, "Card Not Successfully Founded.");
      }
      const selectedCardsForSelling = await this.selectCardsForSelling(
        cards,
        paymentData.title,
        paymentData.count
      );
      if (!selectedCardsForSelling) {
        return response(res, 404, "Cards Not Successfuly Found");
      }
      await Promise.all(
        Object.values(selectedCardsForSelling).map(async (card) => {
          const fields: { fieldName: string; fieldValue: string }[] = [];
          Object.values(card.cardFields).forEach((field) => {
            fields.push(field);
          });

          if (!fields) {
            return response(res, 404, "Fields In Cards Not Successfuly Found");
          }

          const emailPatterns = await replaceEmailTemplatePatterns(
            paymentData.userFullName,
            emailTemplate,
            fields
          );

          emailSender(
            "hosseinghiasi.dev@gmail.com",
            emailPatterns.emailSubject,
            emailPatterns.emailDescription
          );
          const data: IEmail = {
            title: emailPatterns.emailSubject,
            description: emailPatterns.emailDescription,
            target: "hosseinghiasi.dev@gmail.com",
          };
          const email = await this.emailService.create(data);
          if (!email) {
            return response(res, 400, "Email Not Successfuly Created.");
          }
          return response(res, 201, "Email Successfuly Created.", email);
        })
      );
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async selectCardsForSelling(
    cards: ICard[],
    title: string,
    count: number
  ): Promise<ICard[] | null> {
    const selectedCards = cards?.filter((card) => {
      return card.cardProduct === title && card.cardStatus === "فعال";
    });
    const selectedCardsForSelling = selectedCards?.slice(0, count);
    return selectedCardsForSelling;
  }

  async findAllEmails(req: Request, res: Response) {
    try {
      const emails = await this.emailService.findAll();
      if (!emails) {
        return response(res, 400, "Emails Not Successfuly Founded.");
      }
      return response(res, 200, "Emails Successfuly Founded.", emails);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findEmail(req: Request, res: Response) {
    try {
      const emailID: string = req.params.id;
      const email = await this.emailService.findOne(emailID);
      if (!email) {
        return response(res, 404, "Email Not Successfuly Founded.");
      }
      return response(res, 200, "Email Successfuly Founded.", email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteEmail(req: Request, res: Response) {
    try {
      const emailID: string = req.params.id;
      await this.emailService.delete(emailID);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
