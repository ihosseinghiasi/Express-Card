import axios from "axios";

// export const addAdmin = async (admin) => {
//   return axios.post(`http://localhost:4000/adminPanel/admin/createAdmin`, {
//     admin,
//   });
// };

export const getAdmins = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/admin/getAlladmins", {
      withCredentials: true,
      responseType: "json",
    })
    .then((res) => {
      return res.data;
    });
};
