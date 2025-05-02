import axios from "axios";

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
