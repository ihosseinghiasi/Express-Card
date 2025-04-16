import axios from "axios";

export const AddPhoneNumber = async (phoneNumber) => {
  return await axios
    .post("http://localhost:4000/authentication/setPhoneNumber", {
      phoneNumber,
    })
    .then((res) => {
      return res;
    });
};

export const getPhone = async () => {
  return await axios
    .get("http://localhost:4000/authentication/getPhoneNumber")
    .then((res) => {
      return res;
    });
};

export const setCodeVerify = async (verifyCode) => {
  return await axios.post(
    "http://localhost:4000/authentication/setVerifyCode",
    {
      verifyCode,
    }
  );
};

export const login = async (data) => {
  return await axios
    .post(
      "http://localhost:4000/authentication/login",
      { data },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res;
    });
};

export const register = async (data) => {
  return await axios.post("http://localhost:4000/authentication/register", {
    data,
  });
};
