import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { persianDate } from "../../../services/persianDate.services";
import { getUser, updateUser } from "../../../services/adminPanel/user.service";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, ref } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";

const ShowUser = () => {
  const [user, setUser] = useState({});
  const [date, setDate] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const userSchema = object({
    firstName: string().required("فیلد نام نمی تواند خالی باشد"),
    lastName: string().required("فیلد نام خانوادگی نمی تواند خالی باشد"),
    phoneNumber: string()
      .required("فیلد شماره همراه نمی تواند خالی باشد")
      .min(11, "طول شماره همراه 11 رقم می باشد")
      .max(11, "طول شماره همراه 11 رقم می باشد")
      .matches(/^[0-9]/, "شماره همراه باید از ارقام ایجاد شود"),
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
  } = useForm({
    defaultValues: {
      firstName: "firstName",
      lastName: "lastName",
      phoneNumber: "09192300017",
      email: "email@gmail.com",
      password: "password",
      confirm: "password",
    },
    resolver: yupResolver(userSchema),
  });

  const notify = () => {
    Object.values(errors).map((err) => {
      toast.error(err.message);
    });
  };

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  const getAnUser = async () => {
    await getUser(params).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();

    if (params) {
      getAnUser();
    }
  }, []);

  const updateAnUser = async (e) => {
    e.preventDefault();

    await updateUser(params, user).then((res) => {
      if (res.status === 200) {
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
                ویرایش کاربر
              </div>

              <div className="addBody col-8 mx-5">
                <form onSubmit={handleSubmit(updateAnUser)} className="mx-5">
                  <div className="row col-5 userForm">
                    <div>
                      <input
                        type="text"
                        className="form-control form-control mt-3"
                        placeholder="نام"
                        name="firstName"
                        value={user.firstName}
                        {...register("firstName", {
                          onChange: (e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <input
                        type="text"
                        className="form-control form-control mt-3"
                        placeholder="نام خانوادگی"
                        name="lastName"
                        value={user.lastName}
                        {...register("lastName", {
                          onChange: (e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <input
                        type="email"
                        className="form-control form-control mt-3"
                        placeholder="ایمیل"
                        name="email"
                        value={user.email}
                        {...register("email", {
                          onChange: (e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <input
                        type="text"
                        className="form-control form-control mt-3"
                        placeholder="شماره همراه"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        {...register("phoneNumber", {
                          onChange: (e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <input
                        type="password"
                        className="form-control mt-3 enField"
                        placeholder="کلمه عبور"
                        name="password"
                        id="password"
                        {...register("password", {
                          onChange: (e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <i
                        className="bi bi-eye-slash passwordEye"
                        id="togglePassword"
                      ></i>

                      <input
                        type="password"
                        className="form-control mt-3 enField"
                        placeholder="تکرار کلمه عبور"
                        name="confirm"
                        id="confirm"
                        {...register("confirm")}
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
                        onClick={notify}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer rtl={true} theme="colored" />
    </>
  );
};

export default ShowUser;
