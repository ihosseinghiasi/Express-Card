import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { persianDate } from "../../../services/persianDate.services";
import { getEmail } from "../../../services/userPanel/email.service";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";

const ShowEmail = () => {
  const [email, setEmail] = useState([]);
  const [date, setDate] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  const getAnEmail = async () => {
    await getEmail(params).then((res) => {
      setEmail(res.data);
    });
  };

  useEffect(() => {
    getAnEmail();
    getPersianDate();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p> پیشخوان / ایمیل ها / ایمیل </p>
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
                نمایش ایمیل
              </div>

              <div className="addBody col-8 mx-5">
                <div className="paymentFrame">
                  <h3>{email.title}</h3>
                  <pre className="factor mx-3">{email.description}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowEmail;
