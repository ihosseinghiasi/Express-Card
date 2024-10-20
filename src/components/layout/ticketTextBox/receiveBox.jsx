import "../../../css/admin/ticket.css";
const ReceiveBoxTicket = ({ text }) => {
  return (
    <div>
      <div className="recieveBox">
        <div className="headerTicket">
          <div className="ticketText">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveBoxTicket;
