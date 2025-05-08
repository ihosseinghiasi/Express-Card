import axios from "axios";

export const getPayments = async () => {
  return await axios.get(
    "http://localhost:4000/userPanel/payment/getAllPayments"
  );
};
export const getPayment = async (params) => {
  return await axios
    .get(`http://localhost:4000/userPanel/payment/getPayment/${params.id}`)
    .then((res) => {
      return res;
    });
};
