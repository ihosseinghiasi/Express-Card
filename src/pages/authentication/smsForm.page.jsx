import "../../css/shop/smsForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddPhoneNumber } from "services/authenticationService";

const SmsForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();

  const sendPhoneNumber = async (e) => {
    e.preventDefault();
    await AddPhoneNumber(phoneNumber).then((res) => {
      if (res) {
        navigate("/confirmSmsForm");
      }
    });
  };

  return (
    <>
      <div className="registerSmsForm"></div>
      <div className="smsForm">
        <p className="mt-4">شماره همراه</p>
        <form onSubmit={sendPhoneNumber}>
          <input
            type="text"
            className="smsText form-control w-75"
            placeholder="شماره همراه"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit" className="btn btn-danger mt-4">
            ارسال پیامک
          </button>
        </form>
      </div>
    </>
  );
};

export default SmsForm;
