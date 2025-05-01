import { Request, Response } from "express";
import IEmail from "../../interface/email.interface";
import IEmailTemplate from "../../interface/emailTemplate.interface";
import EmailService from "../../services/adminPanel/email.service";
import EmailTemplateService from "../../services/adminPanel/emailTemplate.service";
import CardService from "../../services/adminPanel/card.service";
import emailSender from "../../config/email";
import ICard from "../../interface/card.interface";
import { replaceEmailTemplatePatterns } from "../../config/replaceEmailTemplatePattern";

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
      if (cards) {
        const selectedCardsForSelling = await this.selectCardsForSelling(
          cards,
          paymentData.title,
          paymentData.count
        );
        if (selectedCardsForSelling) {
          await Promise.all(
            Object.values(selectedCardsForSelling).map(async (card) => {
              const fields: { fieldName: string; fieldValue: string }[] = [];
              Object.values(card.cardFields).forEach((field) => {
                fields.push(field);
              });

              if (fields && emailTemplate) {
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
                res.status(200).json(email);
              }
            })
          );
        }
      }
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
      res.status(200).json(emails);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findEmail(req: Request, res: Response) {
    try {
      const emailID: string = req.params.id;
      const email = await this.emailService.findOne(emailID);
      res.status(200).json(email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteEmail(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
