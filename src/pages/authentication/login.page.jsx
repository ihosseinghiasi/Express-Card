import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../../services/authenticationService";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "../../css/shop/login.css";
// import Home from "../main/home";

export const Login = () => {
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [email, setEmail] = useState("torani@gmail.com");
  const [password, setPassword] = useState("1024");
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const schema = object({
    email: string()
      .email("فرمت ایمبل معتبر نمی باشد")
      .required("فیلد ایمیل اجباری است"),
    password: string().required("فیلد پسورد اجباری است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (userType === "admin") {
      setEmail("hosseinghiasi.dev@gmail.com");
      setPassword("1024");
    }
  }, [userType]);
  const userLogin = async (data) => {
    await login(data).then((res) => {
      const token = res?.data?.data?.token;
      if (token) {
        Cookies.set("commercial", token, {
          expires: 7,
          secure: true,
        });
        localStorage.setItem("token", token);
        navigate("/");
      }
    });
  };

  const notify = () => {
    Object.values(errors).map((err) => {
      toast.error(err.message);
    });
  };

  return (
    <>
      <div className="registerForm">
        <div className="register">
          <h3>به اکسپرس کارت خوش آمدید .</h3>
          <p>تا کنون ثبت نام نکرده اید ؟</p>
          <Link
            to={"/register"}
            className="btn btn-outline-success mt-2"
            role="button"
          >
            ثبت نام
          </Link>
        </div>
        <div className="loginForm">
          <h2 className="mt-5">ورود به سایت</h2>
          <form onSubmit={handleSubmit(userLogin)}>
            <div className="mb-3 mt-5">
              <input
                type="text"
                className="form-control mt-5"
                placeholder="ایمیل"
                name="email"
                value={email}
                {...register("email", {
                  onChange: (e) => setEmail(e.target.value),
                })}
              />
              <input
                type="password"
                className="form-control mt-5"
                placeholder="کلمه عبور"
                name="password"
                value={password}
                {...register("password", {
                  onChange: (e) => setPassword(e.target.value),
                })}
              />
            </div>
            <div className="row">
              <div className="d-grid gap-2 col-10 mx-auto float-end mt-3">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={notify}
                >
                  ورود به سایت
                </button>
                <ToastContainer rtl={true} theme="colored" />
              </div>
            </div>
            <div className="row mt-2">
              <Link to={"/"}>بازگشت به صفحه اصلی</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
