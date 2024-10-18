const ShowTicket = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="col-11 mx-5 counter">
              <div class="titleCounter">
                <p>پیشخوان / تیکت ها / مشاهده تیکت</p>
              </div>
              <div class="d-flex justify-content-start parsianDate">
                {/* <p><%= persianDate %></p> */}
              </div>
            </div>

            <div class="addAdmin col-11 my-5 mx-5">
              <div class="addtitle my-3 mx-2 col-8">
                <img src={"/uploads/icons/plus-square-black.svg"} alt=" مشاهده تیکت " />
                مشاهده تیکت
              </div>

              <div class="addBody col-8 mx-5">
                {/* <% Object.values(ticketText).forEach(tickets => { %>
                            <div class="userTicket mt-2 <%= tickets.sender %>">
                                <div class="headerTicket">
                                    <div class="mt-2 me-3 position-absolute">
                                        <% if (tickets.sender === "مدیریت") { %>
                                            <p> شما در تاریخ <%= tickets.date %> گفتید : </p>
                                        <% } else { %> 
                                            <p> کاربر در تاریخ <%= tickets.date %> گفت : </p>
                                        <% } %> 
                                    </div>
                                    <div class=" mt-5 me-3 position-absolute" id="ticket"> 
                                         <%= tickets.text %>
                                    </div>
                                </div>
                            </div>
                        <% }) %> */}
              </div>
            </div>

            <div class="addAdmin col-11 my-5 mx-5">
              <div class="addtitle my-3 mx-2 col-8">
                <img src="/icons/plus-square-black.svg" alt=" پاسخ تیکت " />
                پاسخ تیکت
              </div>

              <div class="addBody col-8 mx-5">
                <form onSubmit="answerTicket">
                  <div class="row"></div>

                  <div class="row mt-3">
                    <div>
                      <div class="form-group mt-3">
                        <textarea
                          name="newTicket"
                          id="editor"
                          class="form-control"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-5">
                    <div>
                      <input
                        class="btn btn-success w-100"
                        type="submit"
                        value="ذخیره تیکت"
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
