import { useEffect, useState } from "react";
import { persianDate } from "../../../services/persianDate.services";
import { addTicket } from "../../../services/adminPanel/ticket.services";

const AddTicket = () => {
  const [ticket, setTicket] = useState();
  const [date, setDate] = useState("");

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
  }, []);

  const addATicket = async () => {
    await addTicket().then((res) => {
      setTicket(res.data);
    });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>پیشخوان / تیکت ها / افزودن تیکت</p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {date}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src="/uploads/icons/plus-square-black.svg"
                  alt=" افزودن تیکت "
                />
                افزودن تیکت
              </div>

              <div className="addBody col-8 mx-5">
                <form onSubmit={(e) => addATicket(e)}>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        class="form-control mt-3"
                        placeholder=" موضوع تیکت "
                        onChange={(e) =>
                          setTicket({
                            ...ticket,
                            [e.target.name]: e.target.value,
                          })
                        }
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
                        <option> مدیریت </option>
                        <option> پشتیبانی </option>
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
