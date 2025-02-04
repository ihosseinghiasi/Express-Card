import axios from "axios";

export const getCategories = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/category/getAllCategories")
    .then((res) => {
      return res;
    });
};
