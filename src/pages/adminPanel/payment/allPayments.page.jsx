import { useEffect, useState } from "react";
import TableRow from "./tableRow.page";
import { persianDate } from "../../../services/persianDate.services";
import {
  deletePayment,
  getPayments,
} from "../../../services/adminPanel/payment.service";
import "../../../css/admin/admin.css";

const AllAdmins = () => {
  const [payments, setPayments] = useState([]);
  const [date, setDate] = useState("");

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  const getAllPayments = async () => {
    await getPayments().then((res) => {
      setPayments(res.data.data);
    });
  };

  const handleDelete = async (id) => {
    await deletePayment(id);
  };

  useEffect(() => {
    getPersianDate();
    getAllPayments();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter faField">
                <p>پیشخوان / پرداختی ها </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {date}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8 faField">
                <img src={"/uploads/icons/users-black.svg"} alt="admins" />
                پرداختی ها
              </div>

              <div className="my-3 position-absolute col-8">
                <table className="table table-bordered my-5 mx-5 col-12 text-center align-middle">
                  <thead>
                    <tr>
                      <th className="col-1" scope="col">
                        #
                      </th>
                      <th className="col-3" scope="col">
                        خریدار
                      </th>
                      <th className="col-3" scope="col">
                        عنوان
                      </th>
                      <th className="col-2" scope="col">
                        مبلغ پرداختی
                      </th>
                      <th className="col-3" scope="col">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <TableRow
                        index={index + 1}
                        id={payment._id}
                        fullName={payment.userFullName}
                        title={payment.title}
                        totalPrice={payment.totalPrice}
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

export default AllAdmins;
