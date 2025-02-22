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
        <div class="col-10 sss">
          <div class="col-11 mx-5 counter">
            <div class="titleCounter">
              <p>پیشخوان</p>
            </div>
            <div class="d-flex justify-content-start parsianDate">
              <p>{date}</p>
            </div>
          </div>
          <h1>admin counter</h1>
          <h2>lksdfjkldjlfjldjkljdflj</h2>
        </div>
      </div>
    </>
  );
};

export default AdminCounter;
