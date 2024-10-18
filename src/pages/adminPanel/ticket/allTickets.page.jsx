import { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./tableRow.page";
import "../../../css/admin/category.css";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [persianDate, setPersianDate] = useState("");

  useEffect(() => {
    const getAllTickets = () => {
      // axios
      //   .get("http://localhost:4000/categories/getAllCategories")
      //   .then((res) => {
      //     setCategories(res.data);
      //   });
    };

    const getPersianDate = async () => {
      // await axios.get("http://localhost:4000/persianDate").then((res) => {
      //   setPersianDate(res.data);
      // });
    };
    getAllTickets();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    // await axios
    //   .delete(`http://localhost:4000/categories/deleteCategory/${id}`)
    //   .then((res) => {});
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
                        موضوع تیکت
                      </th>
                      <th className="col-3" scope="col">
                        دپارتمان مقصد
                      </th>
                      <th className="col-2" scope="col">
                        وضعیت
                      </th>
                      <th className="col-3" scope="col">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets?.map((ticket, index) => (
                      <TableRow
                        index={index + 1}
                        id={ticket._id}
                        subject={ticket.subject}
                        department={ticket.targetDepartment}
                        status={ticket.status}
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

export default AllTickets;
