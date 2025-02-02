import axios from "axios";

export const getProductServices = async (params) => {
  await axios
    .get("http://localhost:4000/adminPanel/product/getAllProducts", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data)
      return res?.data;
    });
};
