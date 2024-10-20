import { useState } from "react";
import "../../../css/admin/ticket.css";
const SendBoxTicket = ({ text }) => {
  return (
    <div>
      <div className="sendBox">
        <div className="headerTicket">
          <div className="ticketText">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendBoxTicket;
