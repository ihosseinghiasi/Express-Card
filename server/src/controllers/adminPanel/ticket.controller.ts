import { Request, Response } from "express";
import TicketService from "../../services/adminPanel/ticket.service";
import ITicket from "../../interface/ticket.interface";
const persianDate = require("../../date/persianDate");
export default class TicketController {
  private readonly ticketService: TicketService;

  constructor() {
    this.ticketService = new TicketService();
  }

  async createTicket(req: Request, res: Response) {
    try {
      const tagIgnore = /(<([^>]+)>)/g;
      const data: ITicket = {
        subject: req.body.ticket.subject,
        status: "ارسال کاربر",
        targetDepartment: req.body.ticket.targetDepartment,
        tickets: {},
        sender: "",
        senderId: "",
        ticketNumbers: req.body.ticketNumbers,
        userTicketsNumber: 1,
        targetTicketsNumber: 0,
        newUserTicketsNumber: 1,
        newTargetTicketsNumber: 0,
      };
      const newTicket = req.body.ticket.tickets.replace(tagIgnore, "");
      data.tickets = {
        ticket1: {
          sender: "",
          text: newTicket,
          date: persianDate,
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
      const tickets = await this.ticketService.findAll();
      res.status(200).json({ tickets });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getTicket(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const ticket: ITicket | null = await this.ticketService.findById(id);
      if (ticket) {
        ticket.newUserTicketsNumber = 0;
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
        const ticketContent = await this.createTicketContent(
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

  async createTicketContent(
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

  async createTicketData(req: Request, res: Response, ticket: ITicket) {
    const data: ITicket = {
      subject: ticket.subject,
      status: "پاسخ مدیریت",
      targetDepartment: ticket.targetDepartment,
      sender: ticket.sender,
      senderId: ticket.senderId,
      tickets: ticket.tickets,
      ticketNumbers: ++ticket.ticketNumbers,
      targetTicketsNumber: ++ticket.targetTicketsNumber,
      newTargetTicketsNumber: ++ticket.newTargetTicketsNumber,
      userTicketsNumber: ticket.userTicketsNumber,
      newUserTicketsNumber: ticket.newUserTicketsNumber,
    };
    return data;
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
      const tickets = await this.ticketService.findAll();
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
      "تیکت های ارسالی کاربر",
      "تیکت های خوانده نشده کاربر",
      "تیکت های خوانده شده کاربر",
      "تیکت های ارسالی ادمین",
      "تیکت های خوانده نشده ادمین",
      "تیکت های خوانده شده ادمین",
    ];

    const colors: string[] = [
      "#00897b",
      "#69f0ae",
      "#00e676",
      "#d50000",
      "#f50057",
      "#d32f2f",
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
