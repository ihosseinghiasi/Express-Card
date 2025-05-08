import { Request, Response } from "express";
import EmailService from "../../services/adminPanel/email.service";
import UserService from "../../services/adminPanel/user.service";
import IEmail from "../../interface/email.interface";

export default class EmailController {
  private readonly emailService: EmailService;
  private readonly userService: UserService;

  constructor() {
    this.emailService = new EmailService();
    this.userService = new UserService();
  }

  async findAllEmails(req: Request, res: Response) {
    try {
      const userID = localStorage.getItem("userAuthenticatedId");
      if (userID) {
        const user = await this.userService.findById(userID);
        const userEmail = user?.email;
        const emails: IEmail[] | null = await this.emailService.findAll();
        const userEmails = emails?.filter((email) => {
          return email.target === userEmail;
        });
        res.status(200).json(userEmails);
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findEmail(req: Request, res: Response) {
    try {
      // const id: string = req.params.id;
      // const email = await this.emailService.findOne(id)
      // res.status(200).json(email)
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
