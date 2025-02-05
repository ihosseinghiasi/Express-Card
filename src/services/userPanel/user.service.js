import axios from "axios";

export const getUser = async (id) => {
  return axios
    .get(`http://localhost:4000/userPanel/profile/getUser/${id}`, {
      withCredentials: true,
    })
    .then((res) => {
      return res;
    });
};

export const updateUser = async (id, user) => {
  return await axios
    .put(
      `http://localhost:4000/userPanel/profile/updateUser/${id}`,
      { user },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res;
    });
};
