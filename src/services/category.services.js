import axios from "axios";

export const getCategoriesServices = async () => {
  await axios
    .get("http://localhost:4000/adminPanel/category/getAllCategories")
    .then((res) => {
      console.log(res?.data?.categories);
      return res?.data?.categories;
    });
};
