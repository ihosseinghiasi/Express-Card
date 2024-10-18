import { Request, Response } from "express";
import TicketService from "../../services/adminPanel/ticket.service";
import ITicket from "../../interface/ticket.interface";

export default class TicketController {
  private readonly ticketService: TicketService;

  constructor() {
    this.ticketService = new TicketService();
  }

  async createTicket(req: Request, res: Response) {
    try {
      const data: ITicket = req.body.ticket;
      const ticket = await this.ticketService.create(data);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getAllTickets(req: Request, res: Response) {
    try {
      const tickets = await this.ticketService.findAll();
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
