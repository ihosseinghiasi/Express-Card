import axios from "axios";

export const persianDate = async () => {
  return await axios
    .get("http://localhost:4000/persianDate/getPersianDate")
    .then((res) => {
      return res;
    });
};
