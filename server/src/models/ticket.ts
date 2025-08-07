import mongoose from "mongoose";
import ITicket from "../interface/ticket.interface";

const ticketSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  status: { type: String, required: true },
  sender: { type: String, required: true },
  senderId: { type: String, required: true },
  targetDepartment: { type: String, required: true },
  ticketNumbers: { type: Number, default: 0, required: true },
  userTicketsNumber: { type: Number, default: 0, required: true },
  targetTicketsNumber: { type: Number, default: 0, required: true },
  newUserTicketsNumber: { type: Number, default: 0, required: true },
  newTargetTicketsNumber: { type: Number, default: 0, required: true },
  tickets: {},
});

const Ticket = mongoose.model<ITicket>("Ticket", ticketSchema, "Ticket");
export default Ticket;
