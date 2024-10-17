import Ticket from "../models/ticket";
import ITicket from "../interface/ticket.interface";
import GenericRepository from "./generic.repository";

export default class TicketRepository extends GenericRepository<ITicket> {
  constructor() {
   super(Ticket)
 } 
}