import axios from "axios";

export const getPersianDateService = async () => {
  await axios.get("http://localhost:4000/persianDate").then((res) => {
    return res?.data;
  });
};
