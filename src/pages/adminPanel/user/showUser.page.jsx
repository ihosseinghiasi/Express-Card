import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowUser = () => {
  const [user, setUser] = useState({});
  const [persianDate, setPersianDate] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getPersianDate = async () => {
    await axios
      .get("http://localhost:4000/persianDate/getPersianDate")
      .then((res) => {
        setPersianDate(res.data);
      });
  };

  const getUser = async () => {
    await axios
      .get(`http://localhost:4000/adminPanel/user/getUser/${params.id}`)
      .then((res) => {
        setUser(res.data);
      });
  };

  useEffect(() => {
    getPersianDate();

    if (params) {
      getUser();
    }
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:4000/adminPanel/user/updateUser/${params.id}`, {
        user,
      })
      .then((res) => {
        if (res?.data) {
          navigate("/admin/allUsers");
        }
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p> پیشخوان / ویرایش کاربر </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{persianDate}</p>
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  className="ms-2"
                  alt=""
                />
                ویرایش کاربر
              </div>

              <div className="addBody col-8 mx-5">
                <form onSubmit={(e) => updateUser(e)} className="mx-5">
                  <div className="row col-5 userForm">
                    <div>
                      <input
                        type="text"
                        className="form-control form-control mt-3"
                        placeholder="نام"
                        name="firstName"
                        value={user.firstName}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        className="form-control form-control mt-3"
                        placeholder="نام خانوادگی"
                        name="lastName"
                        value={user.lastName}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <input
                        type="email"
                        className="form-control form-control mt-3"
                        placeholder="ایمیل"
                        name="email"
                        value={user.email}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        className="form-control form-control mt-3"
                        placeholder="شماره همراه"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <input
                        type="password"
                        className="form-control mt-3 enField"
                        placeholder="کلمه عبور"
                        name="password"
                        id="password"
                        onChange={(e) =>
                          setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <i
                        className="bi bi-eye-slash passwordEye"
                        id="togglePassword"
                      ></i>

                      <input
                        type="password"
                        className="form-control mt-3 enField"
                        placeholder="تکرار کلمه عبور"
                        name="confirmPassword"
                        id="confirmPassword"
                      />
                      <i
                        className="bi bi-eye-slash confirmPasswordEye"
                        id="toggleConfirmPassword"
                      ></i>
                    </div>

                    <div className="col-8 mt-2 mx-5">
                      <input
                        type="submit"
                        value="ثبت کاربر"
                        className="mt-3 btn btn-success w-100"
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

export default ShowUser;
