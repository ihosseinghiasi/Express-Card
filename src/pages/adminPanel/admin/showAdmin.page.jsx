import { React, useEffect, useState } from "react";
import "../../../css/admin/admin.css";
import { useParams, useNavigate } from "react-router-dom";
import { persianDate } from "services/persianDate.services";
import { getAdmin, updateAdmin } from "../../../services/admin.services";

const ShowAdmin = () => {
  const [date, setDate] = useState("");
  const [admin, setAdmin] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getAnAdmin = async () => {
    await getAdmin(params).then((res) => {
      setAdmin(res.data);
    });
  };

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
    params && getAnAdmin();
  }, []);

  const updateAnAdmin = async (e) => {
    e.preventDefault();
    await updateAdmin(params, admin).then((res) => {
      if (res?.data) navigate("/admin/allAdmins");
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>پیشخوان / ویرایش مدیر</p>
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
                ویرایش مدیر
              </div>

              <div className="addBody col-9 mx-3">
                <form onSubmit={(event) => updateAnAdmin(event)}>
                  <div className="row g-2">
                    <div className="mx-4 col-5">
                      <input
                        type="text"
                        className="form-control mt-3 faField"
                        value={admin?.firstName}
                        placeholder="نام"
                        name="firstName"
                        onChange={(event) =>
                          setAdmin({
                            ...admin,
                            [event.target.name]: event.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        className="form-control mt-3 faField"
                        value={admin?.lastName}
                        placeholder="نام خانوادگی"
                        name="lastName"
                        onChange={(event) =>
                          setAdmin({
                            ...admin,
                            [event.target.name]: event.target.value,
                          })
                        }
                      />
                      <input
                        type="email"
                        className="form-control mt-3 enField"
                        value={admin?.email}
                        placeholder="ایمیل"
                        name="email"
                        onChange={(event) =>
                          setAdmin({
                            ...admin,
                            [event.target.name]: event.target.value,
                          })
                        }
                      />
                      <select
                        className="form-select mt-3 faField"
                        value={admin?.department}
                        name="department"
                        onChange={(event) =>
                          setAdmin({
                            ...admin,
                            [event.target.name]: event.target.value,
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
                        onChange={(event) =>
                          setAdmin({
                            ...admin,
                            [event.target.name]: event.target.value,
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
                          checked={admin?.isAdmin}
                          onChange={(event) => {
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
                            });
                          }}
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
                          checked={admin?.isProduct}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
                          checked={admin?.isCard}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
                          checked={admin?.isEmail}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
                          checked={admin?.isReport}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
                          checked={admin?.isTicket}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
                          checked={admin?.isCategory}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
                          checked={admin?.isUser}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
                          checked={admin?.isPayment}
                          onChange={(event) =>
                            setAdmin({
                              ...admin,
                              [event.target.name]: event.target.checked,
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
    </>
  );
};

export default ShowAdmin;
