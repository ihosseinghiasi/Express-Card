import { useEffect, useState } from "react";
import axios from "axios";

const AdminCounter = () => {
  const [persianDate, setPersianDate] = useState("");

  const getPersianDate = async () => {
    await axios
      .get("http://localhost:4000/persianDate/getPersianDate")
      .then((res) => {
        setPersianDate(res.data);
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
              <p>{persianDate}</p>
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
