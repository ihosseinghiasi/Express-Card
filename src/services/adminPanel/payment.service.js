import axios from "axios";

export const pay = async (data) => {
  return await axios.post("http://localhost:4000/adminPanel/payment/pay", {
    data,
  });
};
