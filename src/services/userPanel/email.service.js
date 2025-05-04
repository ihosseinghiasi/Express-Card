import axios from "axios";

export const getEmails = async () => {
  return await axios
    .get("http://localhost:4000/userPanel/email/getAllEmails")
    .then((res) => {
      return res;
    });
};

export const getEmail = async (params) => {
  return await axios
    .get(`http://localhost:4000/userPanel/email/getEmail/${params.id}`)
    .then((res) => {
      return res;
    });
};
