// import { React, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Chart } from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import { Bar, Doughnut, Pie } from "react-chartjs-2";
// import { persianDate } from "../../../services/persianDate.services";
// import { getPaymentReport } from "../../../services/user/report.service";
// import "../../../css/admin/admin.css";
// Chart.register(CategoryScale);

// const PaymentReport = () => {
//   const [date, setDate] = useState("");
//   const [paymentTitles, setPaymentTitles] = useState([]);
//   const [paymentVales, setPaymentValues] = useState([]);
//   const [colors, setColors] = useState([]);
//   const navigate = useNavigate();

//   const data = {
//     labels: paymentTitles,
//     datasets: [
//       {
//         data: paymentVales,
//         backgroundColor: colors,
//         borderWidth: 7,
//       },
//     ],
//   };

//   const report = async () => {
//     await getPaymentReport().then((res) => {
//       setPaymentTitles(res.data.titles);
//       setPaymentValues(res.data.values);
//       setColors(res.data.colors);
//     });
//   };

//   const getPersianDate = async () => {
//     await persianDate().then((res) => {
//       setDate(res.data);
//     });
//   };

//   useEffect(() => {
//     getPersianDate();
//     report();
//   }, []);

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row ">
//           <div className="col-12">
//             <div className="col-11 mx-5 counter">
//               <div className="titleCounter">
//                 <p>محصولات / گزارشات محصولات</p>
//               </div>
//               <div className="d-flex justify-content-start parsianDate">
//                 <p>{date}</p>
//               </div>
//             </div>
//             <div className="addAdmin col-11 my-5 mx-5">
//               <div className="addtitle my-3 mx-2 col-8">
//                 <img
//                   className="px-1 faField"
//                   src={"/uploads/icons/plus-square-black.svg"}
//                   alt="addAdmin"
//                 />
//                 گزارشات محصولات
//               </div>

//               <div className="addBody col-9 mx-3">
//                 <div className="chart">
//                   {paymentTitles && <Bar data={data} />}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentReport;
