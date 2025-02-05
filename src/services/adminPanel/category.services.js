import axios from "axios";

export const getCategories = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/category/getAllCategories")
    .then((res) => {
      return res;
    });
};

export const addCategory = async (formData) => {
  return await axios.post(
    "http://localhost:4000/adminPanel/category/createCategory",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const getCategory = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/category/getCategory/${params.id}`)
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const updateCategory = async (params, formData) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/category/updateCategory/${params.id}`,
    formData
  );
};

export const deleteCategory = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/category/deleteCategory/${id}`
  );
};
