import axios from "axios";

export const addCard = async (data) => {
  return await axios.post("http://localhost:4000/adminPanel/card/createCard", {
    data,
  });
};

export const getCards = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/card/getAllCards")
    .then((res) => {
      return res;
    });
};

export const getAdmin = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/admin/getAdmin/${params.id}`)
    .then((res) => {
      return res;
    });
};

export const updateAdmin = async (params, admin) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/admin/updateAdmin/${params.id}`,
    {
      admin,
    }
  );
};

export const deleteCard = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/card/deleteCard/${id}`
  );
};
