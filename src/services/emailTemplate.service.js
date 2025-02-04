import axios from "axios";

export const addAdmin = async (admin) => {
  return axios.post(`http://localhost:4000/adminPanel/admin/createAdmin`, {
    admin,
  });
};

export const getEmailTemplates = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/email/getAllEmailTemplates")
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

export const deleteEmailTemplate = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/email/deleteEmailtemplate/${id}`
  );
};
