import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { persianDate } from "../../services/persianDate.services";
import { getPaymentReport } from "../../services/userPanel/report.service";
import { getTicketReport } from "../../services/userPanel/report.service";

import "../../css/user/general.css";
Chart.register(CategoryScale);

const UserCounter = () => {
  const [date, setDate] = useState("");
  const [paymentTitles, setPaymentTitles] = useState([]);
  const [paymentVales, setPaymentValues] = useState([]);
  const [paymentColors, setPaymentColors] = useState([]);
  const [ticketTitles, setTicketTitles] = useState([]);
  const [ticketVales, setTicketValues] = useState([]);
  const [ticketColors, setTicketColors] = useState([]);

  const paymentData = {
    labels: paymentTitles,
    datasets: [
      {
        data: paymentVales,
        backgroundColor: paymentColors,
        borderWidth: 7,
      },
    ],
  };

  const ticketData = {
    labels: ticketTitles,
    datasets: [
      {
        data: ticketVales,
        backgroundColor: ticketColors,
        borderWidth: 7,
      },
    ],
  };

  const report = async () => {
    await getPaymentReport().then((res) => {
      setPaymentTitles(res.data.titles);
      setPaymentValues(res.data.values);
      setPaymentColors(res.data.colors);
    });

    await getTicketReport().then((res) => {
      setTicketTitles(res.data.titles);
      setTicketValues(res.data.values);
      setTicketColors(res.data.colors);
    });
  };

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    localStorage.setItem("pageId", "00");
    getPersianDate();
    report();
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
              <div className="paymentArea">
                <div className="chart">
                  {paymentTitles && <Doughnut data={paymentData} />}
                </div>
              </div>
              <div className="ticketArea">
                <div className="chart">
                  {paymentTitles && <Pie data={ticketData} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCounter;
