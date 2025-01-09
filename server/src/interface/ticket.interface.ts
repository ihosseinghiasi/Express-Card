export default interface ITicket {
  subject: string;
  status: string;
  sender: string;
  senderId: string;
  targetDepartment: string;
  ticketNumbers: number;
  userTicketsNumber: number;
  targetTicketsNumber: number;
  newUserTicketsNumber: number;
  newTargetTicketsNumber: number;
  tickets: {};
}
