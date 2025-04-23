import axios from "axios";

export const payment = async (data) => {
  return await axios
    .post("http://localhost:4000/adminPanel/payment/pay", {
      data,
    })
    .then((res) => {
      return res;
    });
};
export const getPayments = async () => {
  return await axios.get(
    "http://localhost:4000/adminPanel/payment/getAllPayments"
  );
};
export const getPayment = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/payment/getPayment/${params.id}`)
    .then((res) => {
      return res;
    });
};
export const deletePayment = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/payment/deletePayment/${id}`
  );
};
