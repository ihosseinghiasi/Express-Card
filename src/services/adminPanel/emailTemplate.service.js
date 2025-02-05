import axios from "axios";

export const addEmailTemplate = async (email) => {
  return axios.post(
    `http://localhost:4000/adminPanel/email/createEmailTemplate`,
    {
      email,
    }
  );
};

export const getEmailTemplates = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/email/getAllEmailTemplates")
    .then((res) => {
      return res;
    });
};

export const getEmailTemplate = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/email/getEmailTemplate/${params.id}`)
    .then((res) => {
      return res;
    });
};

export const updateEmailTemplate = async (params, email) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/email/updateEmailTemplate/${params.id}`,
    { email }
  );
};

export const deleteEmailTemplate = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/email/deleteEmailtemplate/${id}`
  );
};
