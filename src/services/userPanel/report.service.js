import axios from "axios";

export const getPaymentReport = async () => {
  return axios
    .get(`http://localhost:4000/userPanel/payment/paymentReport`)
    .then((res) => {
      return res;
    });
};

export const getTicketReport = async () => {
  return axios
    .get(`http://localhost:4000/userPanel/ticket/ticketReport`)
    .then((res) => {
      return res;
    });
};
