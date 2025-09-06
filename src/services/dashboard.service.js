import axios from "axios";

export const me = async () => {
  return axios.get("http://localhost:4000/dashboard/me").then((res) => {
    return res;
  });
};
