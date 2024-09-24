import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AddTicket = () => {
  const [persianDate, setPersianDate] = useState("");

  const getPersianDate = async () => {
    await axios.get("http://localhost:4000/persianDate").then((res) => {
      setPersianDate(res.data);
    });
  };
  useEffect(() => {
    getPersianDate();
  }, []);
  return (
    <>
      <div class="container-fluid">
        <div class="row ">
          <div class="col-12">
            <div class="col-11 mx-5 counter">
              <div class="titleCounter">
                <p>پیشخوان / تیکت ها / افزودن تیکت</p>
              </div>
              <div class="d-flex justify-content-start parsianDate">
                {persianDate}
              </div>
            </div>

            <div class="addAdmin col-11 my-5 mx-5">
              <div class="addtitle my-3 mx-2 col-8">
                <img
                  src="/uploads/icons/plus-square-black.svg"
                  alt=" افزودن تیکت "
                />
                افزودن تیکت
              </div>

              <div class="addBody col-8 mx-5">
                <form action="/admin-cPanel/ticket/newTicket" method="POST">
                  <div class="row">
                    <div class="col-6">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        class="form-control mt-3"
                        placeholder=" عنوان تیکت "
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-6">
                      <select
                        name="targetDepartment"
                        class="form-select"
                        id="department"
                      >
                        <option> کاربر </option>
                        {/* <% userNames.map( userName => { %>
                                    <option><%= userName %></option>
                                <% } ) %> */}
                      </select>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div>
                      <div class="form-group mt-3">
                        <textarea
                          name="ticket"
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
                        disabled
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
    </>
  );
};

export default AddTicket;
