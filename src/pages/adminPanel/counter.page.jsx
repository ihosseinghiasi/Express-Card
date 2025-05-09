import { useEffect, useState } from "react";
import { persianDate } from "../../services/persianDate.services";

const AdminCounter = () => {
  const [date, setDate] = useState("");

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
  }, []);
  return (
    <>
      <div class="container-fluid">
        <div class="col-10 main-frame">
          <div class="col-11 mx-5 counter">
            <div class="titleCounter">
              <p>پیشخوان</p>
            </div>
            <div class="d-flex justify-content-start parsianDate">
              <p>{date}</p>
            </div>
          </div>
          <div className="addAdmin col-11 my-5 mx-5">
            <div className="addtitle my-3 mx-2 col-8">
              <img
                className="px-1 faField"
                src={"/uploads/icons/plus-square-black.svg"}
                alt="addAdmin"
              />
              گزارشات
            </div>

            <div className="addBody col-9 mx-3">
              <div className="paymentArea"></div>
              <div className="storeArea"></div>
              <div className="ticketArea"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCounter;
