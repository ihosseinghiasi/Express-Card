import axios from "axios";

export const getCategories = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/category/getAllCategories")
    .then((res) => {
      return res;
    });
};

export const addCard = async (data) => {
  return await axios.post("http://localhost:4000/adminPanel/card/createCard", {
    data,
  });
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

export const deleteCategory = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/category/deleteCategory/${id}`
  );
};
