import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { persianDate } from "../../../services/persianDate.services";
import { addAdmin } from "../../../services/adminPanel/admin.services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "../../../css/admin/general.css";
import "../../../css/admin/admin.css";

const AddAdmin = () => {
  const [date, setDate] = useState("");
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "مدیریت",
    password: "",
    isAdmin: false,
    isProduct: false,
    isCard: false,
    isCategory: false,
    isUser: false,
    isEmail: false,
    isTicket: false,
    isReport: false,
    isPayment: false,
  });
  const navigate = useNavigate();

  const registerSchema = object({
    firstName: string().required("فیلد نام نمی تواند خالی باشد"),
    lastName: string().required("فیلد نام خانوادگی نمی تواند خالی باشد"),
    email: string()
      .email("فرمت ایمبل معتبر نمی باشد")
      .required("فیلد ایمیل اجباری است"),
    password: string().required("فیلد پسورد اجباری است"),
    confirm: string().oneOf([ref("password")], "پسورد هماهنگی ندارد"),
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

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
  }, []);

  const addNewAdmin = async () => {
    await addAdmin(admin).then((res) => {
      if (res.status === 201) {
        navigate("/admin/allAdmins");
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p> پیشخوان / افزودن مدیر </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{date}</p>
              </div>
            </div>
            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  className="px-1 faField"
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="addAdmin"
                />
                افزودن مدیر
              </div>

              <div className="addBody col-9 mx-3">
                <form onSubmit={handleSubmit(addNewAdmin)}>
                  <div className="row g-2">
                    <div className="mx-4 col-5">
                      <input
                        type="text"
                        className="form-control mt-3 faField"
                        placeholder="نام"
                        name="firstName"
                        {...register("firstName", {
                          onChange: (e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <input
                        type="text"
                        className="form-control mt-3 faField"
                        placeholder="نام خانوادگی"
                        name="lastName"
                        {...register("lastName", {
                          onChange: (e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <input
                        type="email"
                        className="form-control mt-3 enField"
                        placeholder="ایمیل"
                        name="email"
                        {...register("email", {
                          onChange: (e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.value,
                            }),
                        })}
                      />
                      <select
                        className="form-select mt-3 faField"
                        name="department"
                        onChange={(e) =>
                          setAdmin({
                            ...admin,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        <option selected>مدیریت</option>
                        <option>پشتیبانی</option>
                      </select>
                      <input
                        type="password"
                        className="form-control mt-3 enField"
                        placeholder="کلمه عبور"
                        name="password"
                        id="password"
                        {...register("password", {
                          onChange: (e) =>
                            setAdmin({
                              ...admin,
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

                    <div className="mx-3 col-6">
                      <div className="my-1 mx-1">
                        <p className="faFeild">دسترسی ها :</p>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-5">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkAdmin"
                          name="isAdmin"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkAdmin"
                        >
                          مدیران
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkProduct"
                          name="isProduct"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkProduct"
                        >
                          محصولات
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkCard"
                          name="isCard"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkCard"
                        >
                          کارت ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-5">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkEmail"
                          name="isEmail"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkEmail"
                        >
                          ایمیل ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkReport"
                          name="isReport"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkReport"
                        >
                          گزارشات
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkTicket"
                          name="isTicket"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkTicket"
                        >
                          تیکت ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-5">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkCategory"
                          name="isCategory"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkCategory"
                        >
                          دسته بندی ها
                        </label>
                      </div>
                      <div className="form-check form-switch float-end my-1 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkUser"
                          name="isUser"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkUser"
                        >
                          کاربران
                        </label>
                      </div>
                      <div className="form-check form-switch float-end mt-1 mb-5 me-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="chkPayment"
                          name="isPayment"
                          onChange={(e) =>
                            setAdmin({
                              ...admin,
                              [e.target.name]: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="btn btn-outline-success faField"
                          for="chkPayment"
                        >
                          پرداخت ها
                        </label>
                      </div>
                      <div className="mt-5 mx-5">
                        <div className="col-8 mt-5 mx-5">
                          <input
                            type="submit"
                            value="ثبت نام"
                            className="mt-3 btn btn-success w-100 faField"
                            onClick={notify}
                          />
                        </div>
                      </div>
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

export default AddAdmin;
