import axios from "axios";

export const getProducts = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/product/getAllProducts")
    .then((res) => {
      return res;
    });
};

export const addProduct = async (formData) => {
  return await axios.post(
    "http://localhost:4000/adminPanel/product/createProduct",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const getProduct = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/product/getProduct/${params.id}`)

    .then((res) => {
      return res;
    });
};

export const updateProduct = async (params, formData) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/product/updateProduct/${params.id}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const deleteProduct = async (id) => {
  return axios.delete(
    `http://localhost:4000/adminPanel/product/deleteProduct/${id}`
  );
};
