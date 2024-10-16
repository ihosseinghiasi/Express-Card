import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ShowTicket = () => {
  const [ticket, setTicket] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const getTicket = async () => {
    await axios
      .get(`http://localhost:4000/adminTickets/getTicket/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setTicket(res.data);
      });
  };

  const answerTicket = async () => {};

  useEffect(() => {
    getTicket();
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
                {/* <p><%= persianDate %></p> */}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt=" مشاهده تیکت "
                />
                مشاهده تیکت
              </div>

              <div className="addBody col-8 mx-5">
                {/* <% Object.values(ticketText).forEach(tickets => { %>
                            <div className="userTicket mt-2 <%= tickets.sender %>">
                                <div className="headerTicket">
                                    <div className="mt-2 me-3 position-absolute">
                                        <% if (tickets.sender === "مدیریت") { %>
                                            <p> شما در تاریخ <%= tickets.date %> گفتید : </p>
                                        <% } else { %> 
                                            <p> کاربر در تاریخ <%= tickets.date %> گفت : </p>
                                        <% } %> 
                                    </div>
                                    <div className=" mt-5 me-3 position-absolute" id="ticket"> 
                                         <%= tickets.text %>
                                    </div>
                                </div>
                            </div>
                        <% }) %> */}
                sdjhkdhkhskjdhshdk
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
