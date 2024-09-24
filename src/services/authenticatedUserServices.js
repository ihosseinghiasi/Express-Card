import axios from "axios";

export const getAuthenticatedUser = async () => {
  await axios
    .post("http://localhost:4000/", {}, { withCredentials: true })
    .then((res) => {
      // console.log(res?.data?.user);
      return res?.data?.user;
    });
};
