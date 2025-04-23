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
export const calback = async () => {
  return await axios.get("http://localhost:4000/adminPanel/payment/callback");
};
