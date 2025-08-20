import { Request, Response } from "express";
import TicketService from "../../services/adminPanel/ticket.service";
import UserService from "../../services/adminPanel/user.service";
import ITicket from "../../interface/ticket.interface";
import { LocalStorage } from "node-localstorage";
import response from "../../config/response";
global.localStorage = new LocalStorage("./scratch");
const persianDate = require("../../date/persianDate");
export default class TicketController {
  private readonly ticketService: TicketService;
  private readonly userService: UserService;
  constructor() {
    this.ticketService = new TicketService();
    this.userService = new UserService();
  }

  async createTicket(req: Request, res: Response) {
    try {
      const data = await this.createTicketData(req, res, null);
      if (!data) {
        return response(
          res,
          400,
          "Structure Of Ticket Not Successfuly Created."
        );
      }
      const ticketContent = await this.createTicketContent(req, res, data);
      if (!ticketContent) {
        return response(res, 400, "Content Of Ticket Not Successfuly Created");
      }
      data.tickets = ticketContent;
      const ticket = await this.ticketService.create(data);
      if (!ticket) {
        return response(res, 400, "Ticket Not Successfuly Created.");
      }
      return response(res, 201, "Ticket Successfuly Created.", ticket);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async createTicketContent(req: Request, res: Response, data: ITicket) {
    let tickets = {};
    const tagIgnore = /(<([^>]+)>)/g;
    const newTicket = req.body.ticket.tickets.replace(tagIgnore, "");
    tickets = {
      ticket1: {
        sender: data.sender,
        text: newTicket,
        date: persianDate,
      },
    };
    return tickets;
  }

  async createTicketData(req: Request, res: Response, ticket: ITicket | null) {
    let data!: ITicket;
    const authenticatedId = localStorage.getItem("userAuthenticatedId");
    if (authenticatedId) {
      const user = await this.userService.findById(authenticatedId);
      if (!user) {
        return response(res, 400, "User Not Successfuly Finded.");
      }
      const userFullName = `${user.firstName} ${user.lastName}`;
      data = {
        subject: ticket ? ticket?.subject : req.body.ticket.subject,
        status: ticket ? "پاسخ کاربر" : "ارسال کاربر",
        targetDepartment: ticket
          ? ticket.targetDepartment
          : req.body.ticket.targetDepartment,
        tickets: {},
        sender: ticket ? ticket.sender : userFullName,
        senderId: ticket ? ticket.senderId : user._id,
        ticketNumbers: ticket ? ++ticket.ticketNumbers : 1,
        userTicketsNumber: ticket ? ++ticket.userTicketsNumber : 1,
        targetTicketsNumber: ticket ? ticket.targetTicketsNumber : 0,
        newUserTicketsNumber: ticket ? ++ticket.newUserTicketsNumber : 1,
        newTargetTicketsNumber: ticket ? ticket.newTargetTicketsNumber : 0,
      };
    }
    return data;
  }

  async getAllTickets(req: Request, res: Response) {
    try {
      const tickets = await this.getUserTickets();
      if (!tickets) {
        return response(res, 400, "Ticket/s Not Successfuly Finded.");
      }
      return response(res, 200, "Ticket/s Successfuly Finded.");
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getUserTickets() {
    const userAuthenticated = localStorage.getItem("userAuthenticatedId");
    const allTickets = await this.ticketService.findAll();
    const tickets = allTickets?.filter(
      (ticket) => ticket.senderId === userAuthenticated
    );
    return tickets;
  }

  async getTicket(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const ticket: ITicket | null = await this.ticketService.findById(id);
      if (!ticket) {
        return response(res, 400, "Ticket Not Successfuly Finded.");
      }
      ticket.newTargetTicketsNumber = 0;
      this.ticketService.update(id, ticket);
      return response(res, 200, "Ticket Successfuly Finded.", ticket);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
  async updateTicket(req: Request, res: Response) {
    try {
      const tagIgnore = /(<([^>]+)>)/g;
      const id: string = req.params.id;
      const answerTicket = [
        req.body.answer.newTicket.replace(tagIgnore, ""),
      ] as const;
      const ticket = await this.ticketService.findById(id);
      if (ticket) {
        const data = await this.createTicketData(req, res, ticket);
        if (!data) {
          return response(res, 400, "Data Message Not Successfuly Created.");
        }
        const ticketContent = await this.createTicketContentForUpdate(
          req,
          res,
          data,
          answerTicket
        );
        Object.assign(ticket.tickets, ticketContent);
        data.tickets = ticket.tickets;

        const updateTicket = await this.ticketService.update(id, data);
        if (!updateTicket) {
          return response(res, 400, "Ticket Not Successfuly Updated.");
        }
        return response(res, 200, "Ticket Successfuly Updated.", updateTicket);
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async createTicketContentForUpdate(
    req: Request,
    res: Response,
    ticket: ITicket,
    answerTicket: readonly [string]
  ) {
    const newTicket = Object.fromEntries(
      answerTicket.map(() => [
        `ticket${[ticket.ticketNumbers]}`,
        {
          sender: "مدیریت",
          text: answerTicket[0],
          date: persianDate,
        },
      ])
    );
    return newTicket;
  }

  async deleteTicket(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const ticket = await this.ticketService.delete(id);
      if (!ticket) {
        return response(res, 400, "Ticket Not Successfuly Deleted.");
      }
      return response(res, 200, "Ticket Successfuly Deleted.", ticket);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
  async ticketReport(req: Request, res: Response) {
    try {
      const tickets = await this.getUserTickets();
      let userTicketsNumber: number = 0;
      let userNewTicketsNumber: number = 0;
      let targetTicketsNumber: number = 0;
      let targetNewTicketsNumber: number = 0;
      tickets?.forEach((ticket) => {
        userTicketsNumber += ticket.userTicketsNumber;
        userNewTicketsNumber += ticket.newUserTicketsNumber;
        targetTicketsNumber += ticket.targetTicketsNumber;
        targetNewTicketsNumber += ticket.newTargetTicketsNumber;
      });

      const { ticketTitles, ticketValues, colors } =
        await this.setTicketReportValues(
          userTicketsNumber,
          userNewTicketsNumber,
          targetTicketsNumber,
          targetNewTicketsNumber
        );

      res.json({
        titles: ticketTitles,
        values: ticketValues,
        colors,
      });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async setTicketReportValues(
    userTicketsNumber: number,
    userNewTicketsNumber: number,
    targetTicketsNumber: number,
    targetNewTicketsNumber: number
  ) {
    const userReadTicketsNumber: number =
      userTicketsNumber - userNewTicketsNumber;
    const targetReadTicketsNumber: number =
      targetTicketsNumber - targetNewTicketsNumber;

    const ticketTitles: string[] = [
      "تیکت های ارسالی شما",
      "تیکت های خوانده نشده شما",
      "تیکت های خوانده شده شما",
      "تیکت های ارسالی ادمین",
      "تیکت های خوانده نشده ادمین",
      "تیکت های خوانده شده ادمین",
    ];

    const colors: string[] = [
      "#9EC6F3",
      "#9EC7F3",
      "#9EC8F3",
      "#F75A5A",
      "#F75A5B",
      "#F75A5C",
    ];
    const ticketValues: number[] = [
      userTicketsNumber,
      userNewTicketsNumber,
      userReadTicketsNumber,
      targetTicketsNumber,
      targetNewTicketsNumber,
      targetReadTicketsNumber,
    ];
    return { ticketTitles, ticketValues, colors };
  }
}
