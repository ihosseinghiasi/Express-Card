import mongoose from "mongoose";
import ITicket from "../interface/ticket.interface";

const ticketSchema = new mongoose.Schema({
  subject: { type: String },
  status: { type: String },
  sender: { type: String },
  targetDepartment: { type: String },
  ticketNumbers: { type: Number, default: 0 },
  userTicketsNumber: { type: Number, default: 0 },
  targetTicketsNumber: { type: Number, default: 0 },
  newUserTicketsNumber: { type: Number, default: 0 },
  newTargetTicketsNumber: { type: Number, default: 0 },
  tickets: {},
});

const Ticket = mongoose.model<ITicket>("Ticket", ticketSchema, "Ticket");
export default Ticket