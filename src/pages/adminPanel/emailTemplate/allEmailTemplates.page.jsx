import { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./tableRow.page";
import "../../../css/admin/category.css";

const AllEmailTemplates = () => {
  const [emails, setEmails] = useState([]);
  const [persianDate, setPersianDate] = useState("");

  const getPersianDate = async () => {
    await axios
      .get("http://localhost:4000/persianDate/getPersianDate")
      .then((res) => {
        setPersianDate(res.data);
      });
  };

  const getAllEmails = async () => {
    await axios
      .get("http://localhost:4000/adminPanel/email/getAllEmailTemplates")
      .then((res) => {
        setEmails(res.data);
      });
  };

  useEffect(() => {
    getAllEmails();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    await axios.delete(
      `http://localhost:4000/adminPanel/ticket/deleteTicket/${id}`
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter faField">
                <p>پیشخوان / تیکت ها </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {persianDate}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8 faField">
                <img src={"/uploads/icons/users-black.svg"} alt="Categories" />
                تیکت ها
              </div>

              <div className="my-3 position-absolute col-8">
                <table className="table table-bordered my-5 mx-5 col-12 text-center align-middle">
                  <thead>
                    <tr>
                      <th className="col-1" scope="col">
                        #
                      </th>
                      <th className="col-3" scope="col">
                        عنوان ایمیل
                      </th>
                      <th className="col-3" scope="col">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {emails.map((email, index) => (
                      <TableRow
                        index={index + 1}
                        id={email._id}
                        title={email.title}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEmailTemplates;
