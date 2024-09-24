import "../../../css/admin/general.css";
import { Link } from "react-router-dom";

const AdminNavbarComponent = () => {
  return (
    <>
      <div className="container-fluid bg-light navbarPanel">
        <div className="title my-3">
          <h2>مدیریت سایت</h2>
        </div>
        <div className="d-flex justify-content-end navbarItems">
          <img
            className="profileSize"
            src={"/uploads/pictures/menProfile.svg"}
            alt="profile"
          />
          <Link
            href="/admin-cPanel/ticket/showTickets"
            className="position-relative my-2"
          >
            <img
              className="mt-3 ms-5"
              src={"/uploads/icons/mail.svg"}
              alt="mail"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info my-3 text-light">
              17
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
          <Link
            href="/admin-cPanel/report/sell"
            className="position-relative my-2"
          >
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

export default AdminNavbarComponent;
