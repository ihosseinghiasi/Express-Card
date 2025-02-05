import axios from "axios";

export const addUser = async (user) => {
  return await axios.post("http://localhost:4000/adminPanel/user/createUser", {
    user,
  });
};

export const getUsers = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/user/getAllUsers")
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

export const deleteUser = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/user/deleteUser/${id}`
  );
};
