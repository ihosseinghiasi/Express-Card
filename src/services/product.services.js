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

export const getCard = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/card/getCard/${params.id}`)
    .then((res) => {
      return res;
    });
};

export const updateCard = async (params, data) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/card/updateCard/${params.id}`,
    {
      data,
    }
  );
};

export const deleteProduct = async (id) => {
  return axios.delete(
    `http://localhost:4000/adminPanel/product/deleteProduct/${id}`
  );
};
