import { Request, Response } from "express";
import TicketService from "../../services/adminPanel/ticket.service";
import UserService from "../../services/adminPanel/user.service";
import ITicket from "../../interface/ticket.interface";
import { LocalStorage } from "node-localstorage";
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
      const ticketContent = await this.createTicketContent(req, res, data);
      data.tickets = ticketContent;
      const ticket = await this.ticketService.create(data);
      res.status(200).json(ticket);
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
      if (user) {
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
    }
    return data;
  }

  async getAllTickets(req: Request, res: Response) {
    try {
      const userAuthenticated = localStorage.getItem("userAuthenticatedId");
      const allTickets = await this.ticketService.findAll();
      const tickets = allTickets?.filter(
        (ticket) => ticket.senderId === userAuthenticated
      );
      res.status(200).json(tickets);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getTicket(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const ticket: ITicket | null = await this.ticketService.findById(id);
      if (ticket) {
        ticket.newTargetTicketsNumber = 0;
        this.ticketService.update(id, ticket);
      }
      res.status(200).json([ticket]);
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
        const ticketContent = await this.createTicketContentForUpdate(
          req,
          res,
          data,
          answerTicket
        );
        Object.assign(ticket.tickets, ticketContent);
        data.tickets = ticket.tickets;

        const updateTicket = await this.ticketService.update(id, data);
        res.status(200).json(updateTicket);
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
      res.status(200).json(ticket);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
  async ticketReport(req: Request, res: Response) {
    try {
      const userId = localStorage.getItem("userAuthenticatedId");
      const allTickets = await this.ticketService.findAll();
      let tickets = allTickets?.filter((ticket) => {
        return ticket.senderId === userId;
      });
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
      res.json({
        userTicketsNumber,
        userNewTicketsNumber,
        targetTicketsNumber,
        targetNewTicketsNumber,
      });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
