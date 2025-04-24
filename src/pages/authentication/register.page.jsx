import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";
import { ToastContainer, toast } from "react-toastify";
import { registerUser } from "../../services/authenticationService";
import "../../css/shop/register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerSchema = object({
    firstName: string().required("فیلد نام نمی تواند خالی باشد"),
    lastName: string().required("فیلد نام خانوادگی نمی تواند خالی باشد"),
    email: string()
      .email("فرمت ایمبل معتبر نمی باشد")
      .required("فیلد ایمیل اجباری است"),
    password: string().required("فیلد پسورد اجباری است"),
    confirm: string()
      .oneOf([ref("password")], "پسورد هماهنگی ندارد")
      .required("فیلد پسورد اجباری است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const notify = () => {
    Object.values(errors).map((err) => {
      toast.error(err.message);
    });
  };

  const userRegister = async (data) => {
    await registerUser(data);
    navigate("/");
  };
  return (
    <>
      <div className="registerUserForm mb-3">
        <div className="loginPicture"></div>
        <div className="loginForm">
          <h2 className="mt-3">ثبت نام</h2>
          <form onSubmit={handleSubmit(userRegister)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="نام"
                name="firstName"
                {...register("firstName", {
                  onChange: (e) => setFirstName(e.target.value),
                })}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="نام خانوادگی"
                name="lastName"
                {...register("lastName", {
                  onChange: (e) => setLasttName(e.target.value),
                })}
              />
              <input
                type="email"
                className="form-control mt-3"
                placeholder="ایمیل"
                name="email"
                {...register("email", {
                  onChange: (e) => setEmail(e.target.value),
                })}
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="کلمه عبور"
                name="password"
                {...register("password", {
                  onChange: (e) => setPassword(e.target.value),
                })}
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="تکرار کلمه عبور"
                name="confirm"
                {...register("confirm")}
              />
            </div>
            <div className="row">
              <div className="d-grid gap-2 col-10 mx-auto float-end">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={notify}
                >
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
      <ToastContainer rtl={true} theme="colored" />
    </>
  );
};

export default Register;
