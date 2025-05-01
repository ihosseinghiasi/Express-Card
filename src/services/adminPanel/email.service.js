import axios from "axios";

export const addEmail = async (data) => {
  return axios.post(`http://localhost:4000/adminPanel/email/createEmail`, {
    data,
  });
};

export const getEmails = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/email/getAllEmails")
    .then((res) => {
      return res;
    });
};

export const getEmail = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/email/getEmail/${params.id}`)
    .then((res) => {
      return res;
    });
};

export const deleteEmail = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/email/deleteEmail/${id}`
  );
};
