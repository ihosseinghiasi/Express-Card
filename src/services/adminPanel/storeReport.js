import axios from "axios";

export const getProductsReport = async () => {
  return axios
    .get(`http://localhost:4000/adminPanel/product/storeReport`)
    .then((res) => {
      return res;
    });
};
