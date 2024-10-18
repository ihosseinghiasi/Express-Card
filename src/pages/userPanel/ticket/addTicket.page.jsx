import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTicket = () => {
  const [persianDate, setPersianDate] = useState();
  const [ticket, setTicket] = useState({
    targetDepartment: "مدیریت",
  });
  const navigate = new useState()

  const getPersianDate = async () => {
    // await axios.get("http://localhost:4000/persianDate").then((res) => {
    //   setPersianDate(res.data);
    // });
  };

  const addTicket = async () => {
    await axios.post("http://localhost:4000/userTickets/createTicket", {
      ticket,
    }).then(res => {
      if (res.data) {
        console.log(res.data)
        navigate("/user/allTickets")
      }
    })
  };

  useEffect(() => {
    getPersianDate();
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="col-11 mx-5 counter">
            <div className="titleCounter">
              <p>پیشخوان / تیکت ها / افزودن تیکت</p>
            </div>
            <div className="d-flex justify-content-start parsianDate">
              {persianDate}
            </div>
          </div>

          <div className="addAdmin col-11 my-5 mx-5">
            <div className="addtitle my-3 mx-2 col-8">
              <img
                src="/uploads/icons/plus-square-black.svg"
                className="mx-2"
                alt=" افزودن تیکت "
              />
              افزودن تیکت
            </div>

            <div className="addBody col-8 mx-5">
              <form onSubmit={(e) => addTicket(e)}>
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control mt-3"
                      placeholder=" عنوان تیکت "
                      onChange={(event) =>
                        setTicket({
                          ...ticket,
                          [event.target.name]: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <select
                      name="targetDepartment"
                      className="form-select"
                      id="department"
                      onChange={(event) =>
                        setTicket({
                          ...ticket,
                          [event.target.name]: event.target.value,
                        })
                      }
                    >
                      <option>مدیریت</option>
                      <option>پشتیبانی</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div>
                    <div className="form-group mt-3">
                      <textarea
                        name="tickets"
                        id="editor"
                        className="form-control"
                        cols="30"
                        rows="10"
                        onChange={(event) =>
                          setTicket({
                            ...ticket,
                            [event.target.name]: event.target.value,
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
  );
};

export default AddTicket;
