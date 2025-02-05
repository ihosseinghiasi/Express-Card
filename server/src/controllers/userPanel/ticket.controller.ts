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
      const authenticatedId = localStorage.getItem("authenticatedId");
      if (authenticatedId) {
        const user = await this.userService.findById(authenticatedId);
        const tagIgnore = /(<([^>]+)>)/g;
        const userFullName = `${user?.firstName} ${user?.lastName}`;
        const data: ITicket = {
          subject: req.body.ticket.subject,
          status: "ارسال کاربر",
          targetDepartment: req.body.ticket.targetDepartment,
          tickets: {},
          sender: userFullName || "",
          senderId: user?._id || "",
          ticketNumbers: 1,
          userTicketsNumber: 1,
          targetTicketsNumber: 0,
          newUserTicketsNumber: 1,
          newTargetTicketsNumber: 0,
        };
        const newTicket = req.body.ticket.tickets.replace(tagIgnore, "");
        data.tickets = {
          ticket1: {
            sender: data.sender,
            text: newTicket,
            date: persianDate,
          },
        };
        const ticket = await this.ticketService.create(data);
        res.status(200).json(ticket);
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getAllTickets(req: Request, res: Response) {
    try {
      const userAuthenticated = localStorage.getItem("authenticatedId");
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
      const ticketNumbers: number = ticket ? ++ticket.ticketNumbers : -1;
      const data: ITicket = {
        subject: ticket?.subject || "null",
        status: "پاسخ کاربر",
        targetDepartment: ticket?.targetDepartment || "null",
        sender: ticket?.sender || "null",
        senderId: ticket?.senderId || "null",
        tickets: {},
        ticketNumbers,
        targetTicketsNumber: ticket?.targetTicketsNumber || -1,
        newTargetTicketsNumber: ticket?.newTargetTicketsNumber || -1,
        userTicketsNumber: ticket ? ++ticket.userTicketsNumber : -1,
        newUserTicketsNumber: ticket ? ++ticket.newUserTicketsNumber : -1,
      };
      const newTicket = Object.fromEntries(
        answerTicket.map(() => [
          `ticket${[ticketNumbers]}`,
          {
            sender: "کاربر",
            text: answerTicket[0],
            date: persianDate,
          },
        ])
      );
      if (ticket) {
        Object.assign(ticket.tickets, newTicket);
        data.tickets = ticket.tickets;
      }
      const updateTicket = await this.ticketService.update(id, data);
      res.status(200).json(updateTicket);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
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
      const userId = localStorage.getItem("authenticatedId");
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
