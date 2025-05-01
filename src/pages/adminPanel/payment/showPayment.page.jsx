import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { persianDate } from "../../../services/persianDate.services";
import { getPayment } from "../../../services/adminPanel/payment.service";
import "../../../css/admin/payment.css";

const ShowPayment = () => {
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  const getAPayment = async () => {
    await getPayment(params).then((res) => {
      setPayment(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
    if (params) getAPayment();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p> پیشخوان / پرداختی ها / پرداختی </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{date}</p>
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="category"
                />
                پرداختی
              </div>

              <div className="addBody col-8 mx-5">
                <div className="paymentFrame">
                  <h3>فاکتور پرداختی</h3>
                  <p className="factor">
                    با سلام فاکتور پرداختی شما به شرح زیر می با شد :
                  </p>

                  <div className="my-3 position-absolute col-8">
                    <table className="table table-bordered my-5 mx-5 col-10 text-center align-middle">
                      <thead>
                        <tr>
                          <th className="col-3" scope="col">
                            عنوان
                          </th>
                          <th className="col-1" scope="col">
                            تعداد
                          </th>
                          <th className="col-1" scope="col">
                            قیمت واحد
                          </th>
                          <th className="col-2" scope="col">
                            پرداختی
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-3">{payment.title}</td>
                          <td className="col-1">{payment.count}</td>
                          <td className="col-3">{payment.price} تومان</td>
                          <td className="col-3">{payment.totalPrice} تومان</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPayment;
