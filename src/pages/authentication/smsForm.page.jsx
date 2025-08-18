import "../../css/shop/smsForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddPhoneNumber } from "../../services/authenticationService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { ToastContainer, toast } from "react-toastify";

const SmsForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();

  const phone = object({
    phoneNumber: string()
      .required("فیلد شماره همراه نمی تواند خالی باشد")
      .min(11, "طول شماره همراه 11 رقم می باشد")
      .max(11, "طول شماره همراه 11 رقم می باشد")
      .matches(/^[0-9]/, "شماره همراه باید از ارقام ایجاد شود"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(phone) });

  const notify = () => {
    Object.values(errors).map((err) => {
      toast.error(err.message);
    });
  };

  const sendPhoneNumber = async () => {
    await AddPhoneNumber(phoneNumber).then((res) => {
      if (res.status === 200) {
        navigate("/confirmSmsForm");
      } else if (res.status === 206) {
        toast.error("اتصال اینترنت خود را چک کنید");
      }
    });
  };

  return (
    <>
      <div className="registerSmsForm"></div>
      <div className="smsForm">
        <p className="mt-4">شماره همراه</p>
        <form onSubmit={handleSubmit(sendPhoneNumber)}>
          <input
            type="string"
            className="smsText form-control w-75"
            placeholder="شماره همراه"
            name="phoneNumber"
            id="phoneNumber"
            {...register("phoneNumber", {
              onChange: (e) => setPhoneNumber(e.target.value),
            })}
          />
          <button
            type="submit"
            className="btn btn-danger mt-4"
            onClick={notify}
          >
            ارسال پیامک
          </button>
        </form>
      </div>
      <ToastContainer rtl={true} theme="colored" />
    </>
  );
};

export default SmsForm;
