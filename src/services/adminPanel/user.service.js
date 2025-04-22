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

export const getUser = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/user/getUser/${params.id}`)
    .then((res) => {
      return res;
    });
};

export const updateUser = async (params, user) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/user/updateUser/${params.id}`,
    {
      user,
    }
  );
};

export const deleteUser = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/user/deleteUser/${id}`
  );
};
