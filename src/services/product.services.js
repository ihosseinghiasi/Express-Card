import axios from "axios";

export const getProductServices = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/product/getAllProducts", {
      withCredentials: true,
      responseType: "json",
    })
    .then((res) => {
      return res.data;
    });
};
