import axios from "axios";

export const addTicket = async (ticket) => {
  return axios.post("http://locahost:4000/adminPanel/ticket/createTicket", {
    ticket,
  });
};

export const getTickets = async () => {
  return await axios
    .get("http://localhost:4000/adminPanel/ticket/getAllTickets")
    .then((res) => {
      return res;
    });
};

export const getAdmin = async (params) => {
  return await axios
    .get(`http://localhost:4000/adminPanel/admin/getAdmin/${params.id}`)
    .then((res) => {
      return res;
    });
};

export const updateAdmin = async (params, admin) => {
  return await axios.put(
    `http://localhost:4000/adminPanel/admin/updateAdmin/${params.id}`,
    {
      admin,
    }
  );
};

export const deleteTicket = async (id) => {
  return await axios.delete(
    `http://localhost:4000/adminPanel/ticket/deleteTicket/${id}`
  );
};
