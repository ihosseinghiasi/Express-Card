import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { persianDate } from "../../../services/persianDate.services";
import { getStoreReport } from "../../../services/adminPanel/report.service";
import "../../../css/admin/admin.css";
Chart.register(CategoryScale);

const StoreReport = () => {
  const [date, setDate] = useState("");
  const [storeTitels, setStoreTitles] = useState([]);
  const [storeVales, setStoreValues] = useState([]);
  const [colors, setColors] = useState([]);
  const navigate = useNavigate();

  const data = {
    labels: storeTitels,
    datasets: [
      {
        data: storeVales,
        backgroundColor: colors,
        borderWidth: 7,
      },
    ],
  };

  const getProductsStore = async () => {
    await getStoreReport().then((res) => {
      setStoreTitles(res.data.titles);
      setStoreValues(res.data.values);
      setColors(res.data.colors);
    });
  };

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
    getProductsStore();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>محصولات / گزارشات محصولات</p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
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
                گزارشات محصولات
              </div>

              <div className="addBody col-9 mx-3">
                <div className="chart">
                  {storeTitels && <Doughnut data={data} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreReport;
