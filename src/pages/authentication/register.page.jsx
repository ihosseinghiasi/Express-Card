import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/shop/register.css";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasseord] = useState("");

  const navigate = useNavigate();

  function userRegister(event) {
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    axios.post("http://localhost:4000/authentication/register", {data});
    navigate("/");
  }
  return (
    <>
      <div className="registerUserForm mb-3">
        <div className="loginPicture"></div>
        <div className="loginForm">
          <h2 className="mt-3">ثبت نام</h2>
          <form onSubmit={userRegister}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="نام"
                name="firstName"
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="نام خانوادگی"
                name="lastName"
                onChange={(event) => setLasttName(event.target.value)}
              />
              <input
                type="email"
                className="form-control mt-3"
                placeholder="ایمیل"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="کلمه عبور"
                name="password"
                onChange={(event) => setPasseord(event.target.value)}
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="تکرار کلمه عبور"
                name=""
              />
            </div>
            <div className="row">
              <div className="d-grid gap-2 col-10 mx-auto float-end">
                <button type="submit" className="btn btn-success">
                  ثبت نام
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="d-grid gap-2 col-4 mx-auto float-end mt-3">
              <a href="/">بازگشت به صفحه اصلی</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
