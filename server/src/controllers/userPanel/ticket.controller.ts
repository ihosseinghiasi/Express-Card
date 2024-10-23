import { Request, Response } from "express";
import TicketService from "../../services/adminPanel/ticket.service";
import UserService from "../../services/adminPanel/user.service";
import ITicket from "../../interface/ticket.interface";

export default class TicketController {
  private readonly ticketService: TicketService;
  private readonly userService: UserService;
  constructor() {
    this.ticketService = new TicketService();
    this.userService = new UserService();
  }

  async createTicket(req: Request, res: Response) {
    try {
      const user = await this.userService.findById("6708250112edf0c6da7755ff");
      const tagIgnore = /(<([^>]+)>)/g;
      const data: ITicket = {
        subject: req.body.ticket.subject,
        status: "ارسال کاربر",
        targetDepartment: req.body.ticket.targetDepartment,
        tickets: {},
        sender: user?._id || "",
        ticketNumbers: req.body.ticketNumbers,
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
          date: "27 mehr",
        },
      };
      const ticket = await this.ticketService.create(data);
      res.status(200).json(ticket);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getAllTickets(req: Request, res: Response) {
    try {
      const allTickets = await this.ticketService.findAll();
      const tickets = allTickets?.filter((ticket) => ticket.sender === "makan");
      res.status(200).json(tickets);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getTicket(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
  async updateTicket(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
  async deleteTicket(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
