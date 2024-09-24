const { default: axios } = require("axios");
const Ticket = require("../../models/ticket");
const persianDate = require("persian-date");
const checkUser = require("../../middlewares/checkUserAuthenticate");

module.exports.addTicket = async (req, res, next) => {
  try {
    // function createticket() {
    //   let newTicket = req.body.ticket;
    //   const tagIgnore = /(<([^>]+)>)/g;
    //   newTicket = newTicket.replace(tagIgnore, "");
    //   let tickets = {};
    //   if (newTicket) {
    //     tickets = {
    //       ticket1: { sender: "شما", text: newTicket, date: persianDate },
    //     };
    //   }
    //   return tickets;
    // }
    // const ticket = createticket();

    // const newTicket = new Ticket({
    //   user: req.user.id,
    //   title: req.body.title,
    //   status: "ارسال کاربر",
    //   targetDepartment: req.body.targetDepartment,
    //   ticket,
    //   tickets: 1,
    //   newUserTickets: 1,
    // });
  } catch (err) {
    next(err);
  }
};
