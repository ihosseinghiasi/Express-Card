import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { persianDate } from "services/persianDate.services";
import { addUser } from "services/adminPanel/user.service";
import "../../../css/admin/general.css";
import "../../../css/admin/admin.css";

const AddUser = () => {
  const [user, setUser] = useState();
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
  }, []);

  const addNewUser = async (e) => {
    e.preventDefault();
    await addUser(user).then((res) => {
      if (res.status === 201) navigate("/admin/allUsers");
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p> پیشخوان / افزودن کاربر </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{date}</p>
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  className="ms-2"
                  alt=""
                />
                افزودن کاربر
              </div>

              <div className="addBody col-8 mx-5">
                <form onSubmit={(e) => addNewUser(e)} className="mx-5">
                  <div className="row col-5 userForm">
                    <div>
                      <input
                        type="text"
                        className="form-control form-control mt-3"
                        placeholder="نام"
                        name="firstName"
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

export default AddUser;
