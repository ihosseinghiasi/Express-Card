import axios from "axios";

export const addEmail = async (data) => {
  return axios.post(`http://localhost:4000/adminPanel/email/createEmail`, {
    data,
  });
};

export const getEmailTemplates = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/emailTemplate/getAllEmailTemplates")
    .then((res) => {
      return res;
    });
};

export const getEmailTemplate = async (params) => {
  return await axios
    .get(
      `http://localhost:4000/adminPanel/emailTemplate/getEmailTemplate/${params.id}`
    )
    .then((res) => {
      return res;
    });
};

export const updateEmailTemplate = async (params, email) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/emailTemplate/updateEmailTemplate/${params.id}`,
    { email }
  );
};

export const deleteEmailTemplate = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/emailTemplate/deleteEmailtemplate/${id}`
  );
};
