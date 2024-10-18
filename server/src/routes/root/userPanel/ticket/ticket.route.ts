import { Router } from "express";
import TicketController from "../../../../controllers/userPanel/ticket.controller";

class TicketRoute {
  private readonly ticketController: TicketController;
  public readonly router: Router;

  constructor() {
    this.ticketController = new TicketController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(
      "/createTicket",
      this.ticketController.createTicket.bind(this.ticketController)
    );
    this.router.get(
      "/getAllTickets",
      this.ticketController.getAllTickets.bind(this.ticketController)
    );
  }
}

export default new TicketRoute().router;
