import { Request, Response } from "express";
import bcrypt from "bcrypt";
import IUser from "../../interface/user.interface";
import UserService from "../../services/adminPanel/user.service";
import EmailTemplateService from "../../services/adminPanel/emailTemplate.service";
import { createToken } from "../../middlewares/createToken";
import { LocalStorage } from "node-localstorage";
import emailSender from "../../config/email";
import { replaceEmailTemplatePatterns } from "../../config/replaceEmailTemplatePattern";
import response from "../../config/response";
import dns from "dns";
global.localStorage = new LocalStorage("./scratch");
const { Smsir } = require("smsir-js");
export default class UserAuthentication {
  private _phoneNumber!: string;
  private _verifySmsCode!: string;
  private readonly userService: UserService;
  private readonly emailTemplateService: EmailTemplateService;

  constructor() {
    this.userService = new UserService();
    this.emailTemplateService = new EmailTemplateService();
  }

  async register(req: Request, res: Response) {
    try {
      const data: IUser = req.body.data;
      const userCreated = await this.userService.findById(data._id);
      if (userCreated) {
        return response(res, 400, "This User Already Registerd.");
      }
      data.phoneNumber = this._phoneNumber;
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
      const user = await this.userService.create(data);
      if (!user) {
        return response(res, 400, "User Not Successfuly Created.");
      }
      const fullName = `${user.firstName} ${user.lastName}`;
      const emailTemplate = await this.emailTemplateService.findOne(
        "679136dd9b82810ff9e5294c"
      );
      if (!emailTemplate) {
        return response(res, 400, "Email Template Not Successfuly Find.");
      }
      const emailPatterns = await replaceEmailTemplatePatterns(
        fullName,
        emailTemplate,
        []
      );
      emailSender(
        user.email,
        emailPatterns.emailSubject,
        emailPatterns.emailDescription
      );
      return response(res, 201, "User Successfuly Registed.");
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body.data;
      const user: IUser | null = await this.userService.login(email);
      if (!user) {
        return response(res, 400, "Invalid Email And/Or Password.");
      }
      if (user) {
        const authentication = await bcrypt.compare(password, user.password);
        if (authentication) {
          const token = createToken(user._id);
          localStorage.setItem("token", token);
          return response(res, 200, "User Successfuly Logged In", {
            token,
          });
        }
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async setPhoneNumber(req: Request, res: Response) {
    try {
      dns.lookup(
        "www.google.com",
        async (
          err: NodeJS.ErrnoException | null,
          address: string,
          family: number
        ) => {
          if (!err) {
            const smsir = new Smsir(
              "d8oGRzrQn4qishTuyrREWjRLLWpF6RhmJRdBa1216CeTROk7FKzQoFh7drV4mkvh",
              30007732903087
            );

            const phoneNumber: string = req.body.phoneNumber;
            const code = Math.floor(100000 + Math.random() * 900000);
            this._phoneNumber = phoneNumber;
            this._verifySmsCode = code.toString();

            const isSend = await smsir.SendVerifyCode(phoneNumber, 930321, [
              {
                name: "code",
                value: code.toString(),
              },
            ]);
            if (isSend.data.status === 1) {
              return response(res, 200, "Verify Code Sended.", {
                verfyCode: code,
              });
            }
          }
          return response(res, 206, "no internet connection ");
        }
      );
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getPhoneNumber(req: Request, res: Response) {
    try {
      return response(res, 200, "Phone Number Sended.", {
        phoneNumber: this._phoneNumber,
      });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async setVerifyCode(req: Request, res: Response) {
    try {
      const verifyCode: string = req.body.verifyCode;
      if (verifyCode === this._verifySmsCode) {
        return response(res, 200, "Verify Code Correct.");
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
