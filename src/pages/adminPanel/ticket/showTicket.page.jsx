import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SendBoxTicket from "components/layout/ticketTextBox/sendBox";
import ReceiveBoxTicket from "components/layout/ticketTextBox/receiveBox";
import { persianDate } from "services/persianDate.services";
import { getTicket, updateTicket } from "services/adminPanel/ticket.services";
import "../../../css/admin/ticket.css";

const ShowTicket = () => {
  const [ticket, setTicket] = useState();
  const [ticketDetail, setTicketDetail] = useState();
  const [date, setDate] = useState();
  const [answer, setAnswer] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  const getATicket = async () => {
    await getTicket(params).then((res) => {
      setTicket(res.data);
    });
  };

  useEffect(() => {
    ticket?.map((detail) => {
      setTicketDetail(detail);
    });
  }, [ticket]);

  const answerTicket = async (e) => {
    await updateTicket(params, answer);
  };

  useEffect(() => {
    getATicket();
    getPersianDate();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>پیشخوان / تیکت ها / مشاهده تیکت</p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {date}
              </div>
            </div>
            <div className="col-11 mx-5 ticketHeaderAdmin">
              <div className="subject">
                <img src={"/uploads/icons/mail-black.svg"} alt="ticket" />
                <p className="mx-2">
                  <strong>موضوع پیام :</strong> {ticketDetail?.subject}
                </p>
              </div>
              <div className="sender">
                <img src={"/uploads/icons/user-black.svg"} alt="ticket" />
                <p className="mx-2">
                  <strong>ارسال کننده :</strong> {ticketDetail?.sender}
                </p>
              </div>
            </div>

            <div className="addAdmin col-11 my-4 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt=" مشاهده تیکت "
                />
                مشاهده تیکت
              </div>

              <div className="addBody col-8 mx-5">
                {ticket?.map((message) =>
                  Object.values(message.tickets).map((text) =>
                    text.sender === "مدیریت" || text.sender === "پشتیبانی" ? (
                      <ReceiveBoxTicket
                        sender={message.sender}
                        text={text.text}
                      />
                    ) : (
                      <SendBoxTicket sender={message.sender} text={text.text} />
                    )
                  )
                )}
              </div>
            </div>
            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt=" پاسخ تیکت "
                />
                پاسخ تیکت
              </div>
              <div className="addBody col-8 mx-5">
                <form onSubmit={(e) => answerTicket(e)}>
                  <div className="row"></div>
                  <div className="row mt-3">
                    <div>
                      <div className="form-group mt-3">
                        <textarea
                          name="newTicket"
                          id="editor"
                          className="form-control"
                          cols="30"
                          rows="10"
                          onChange={(e) =>
                            setAnswer({
                              ...answer,
                              [e.target.name]: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div>
                      <input
                        className="btn btn-success w-100"
                        type="submit"
                        value="پاسخ تیکت"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTicket;
