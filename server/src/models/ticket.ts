import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  subject: { type: String },
  status: { type: String },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  targetDepartment: { type: String },
  ticketNumbers: { type: Number, default: 0 },
  userTicketsNumber: { type: Number, default: 0 },
  targetTicketsNumber: { type: Number, default: 0 },
  newUserTicketsNumber: { type: Number, default: 0 },
  newTargetTicketsNumber: { type: Number, default: 0 },
  tickets: {},
});

const Ticket = mongoose.model("Ticket", ticketSchema, "Ticket");
export default Ticket