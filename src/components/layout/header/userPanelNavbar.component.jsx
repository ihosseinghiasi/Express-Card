import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTicketReport } from "../../../services/userPanel/report.service";
import "../../../css/admin/general.css";

const UserNavbarComponent = () => {
  const [adminNewTicketNumber, setAdminNewTicketNumber] = useState(0);

  const ticketReport = async () => {
    await getTicketReport().then((res) => {
      setAdminNewTicketNumber(res.data.values[3]);
    });
  };

  useEffect(() => {
    ticketReport();
  }, []);
  return (
    <>
      <div className="container-fluid bg-light navbarPanel">
        <div className="title my-3">
          <h2>کاربر سایت</h2>
        </div>
        <div className="d-flex justify-content-end navbarItems">
          <img
            className="profileSize"
            src={"/uploads/pictures/menProfile.svg"}
            alt="profile"
          />
          <Link to={"/user/allTickets"} className="position-relative my-2">
            <img
              className="mt-3 ms-5"
              src={"/uploads/icons/mail.svg"}
              alt="mail"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info my-3 text-light">
              {adminNewTicketNumber}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
          <Link to={"/user/allPayments"} className="position-relative my-2">
            <img
              className="mt-3 ms-4"
              src={"/uploads/icons/shopping-bag.svg"}
              alt="shopping"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning my-3 text-light">
              23
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserNavbarComponent;
