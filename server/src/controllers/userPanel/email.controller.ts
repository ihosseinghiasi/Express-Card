import { Request, Response } from "express";
import EmailService from "../../services/adminPanel/email.service";
import UserService from "../../services/adminPanel/user.service";
import IEmail from "../../interface/email.interface";
import response from "../../config/response";

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
        if (!user) {
          return response(res, 400, "User Not Successfuly Finded.");
        }
        const userEmail = user?.email;
        const emails: IEmail[] | null = await this.emailService.findAll();
        if (!emails) {
          return response(res, 400, "Email/Emails Not Successfuly Finded.");
        }
        const userEmails = emails?.filter((email) => {
          return email.target === userEmail;
        });
        return response(
          res,
          200,
          "Emails Of The User Successfuly Finded",
          userEmails
        );
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findEmail(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const email = await this.emailService.findOne(id);
      if (!email) {
        return response(res, 400, "Email Not Successfuly Finded.");
      }
      return response(res, 200, "Email Successfuly Finded.", email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
