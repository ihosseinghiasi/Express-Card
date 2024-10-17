import TicketRepository from "../../repository/ticket.repository";
import ITicket from "../../interface/ticket.interface";

export default class TicketService {
  private readonly ticketRepository: TicketRepository;

  constructor() {
    this.ticketRepository = new TicketRepository();
  }

  async create(data: ITicket): Promise<ITicket> {
    return this.ticketRepository.create(data);
  }

  async findAll(): Promise<ITicket[] | null> {
    return this.ticketRepository.findAll();
  }

  async findById(id: string): Promise<ITicket | null> {
    return this.ticketRepository.findById(id);
  }

  async update(id: string, data: ITicket): Promise<ITicket | null> {
    return this.ticketRepository.update(id, data);
  }

  async delete(id: string): Promise<ITicket | null> {
    return this.ticketRepository.delete(id);
  }
}