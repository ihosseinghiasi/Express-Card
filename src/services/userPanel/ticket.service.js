import axios from "axios";

export const addTicket = async (ticket) => {
  return axios.post("http://localhost:4000/userPanel/ticket/createTicket", {
    ticket,
  });
};

export const getTickets = async () => {
  return await axios
    .get("http://localhost:4000/userPanel/ticket/getAllTickets")
    .then((res) => {
      return res;
    });
};

export const getTicket = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/ticket/getTicket/${params.id}`)
    .then((res) => {
      return res;
    });
};

export const updateTicket = async (params, answer) => {
  return await axios
    .put(`http://localhost:4000/adminPanel/ticket/answerTicket/${params.id}`, {
      answer,
    })
    .then((res) => {
      return res;
    });
};

export const deleteTicket = async (id) => {
  return await axios.delete(
    `http://localhost:4000/userPanel/ticket/deleteTicket/${id}`
  );
};
