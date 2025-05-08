import axios from "axios";

export const getStoreReport = async () => {
  return axios
    .get(`http://localhost:4000/adminPanel/product/storeReport`)
    .then((res) => {
      return res;
    });
};

export const getPaymentReport = async () => {
  return axios
    .get(`http://localhost:4000/adminPanel/payment/paymentReport`)
    .then((res) => {
      return res;
    });
};

export const getTicketReport = async () => {
  return axios
    .get(`http://localhost:4000/adminPanel/ticket/ticketReport`)
    .then((res) => {
      return res;
    });
};
