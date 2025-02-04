import axios from "axios";

export const getProducts = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/product/getAllProducts")
    .then((res) => {
      return res;
    });
};
