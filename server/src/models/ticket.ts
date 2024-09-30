import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  status: { type: String },
  targetDepartment: { type: String },
  tickets: { type: Number, default: 0 },
  adminTickets: { type: Number, default: 0 },
  userTickets: { type: Number, default: 0 },
  newUserTickets: { type: Number, default: 0 },
  newAdminTickets: { type: Number, default: 0 },
  ticket: {},
});

export const ticketModel = mongoose.model("Ticket", ticketSchema, "Ticket");
