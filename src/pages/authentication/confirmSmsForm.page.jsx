import "../../css/shop/smsForm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import axios from "axios";

const ConfirmSms = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [verifyCode, setVerifyCode] = useState();
  const [timer, setTimer] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPhoneNumber();
  }, []);

  const getPhoneNumber = async () => {
    axios
      .get("http://localhost:4000/authentication/getPhoneNumber")
      .then((res) => {
        setPhoneNumber(res.data.phoneNumber);
      });
  };

  async function sendVerifyCode(event) {
    event.preventDefault();
    await axios
      .post("http://localhost:4000/authentication/setVerifyCode", {
        verifyCode,
      })
      .then((res) => {
        if (res.data.status === "OK") {
          navigate("/register");
        }
      });
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setTimer(false);
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <>
      <div className="registerSmsForm"></div>
      <div className="smsForm">
        <form onSubmit={sendVerifyCode}>
          <p className="mt-3 phoneNumber"> {phoneNumber} </p>
          <input
            type="tel"
            className="smsText form-control w-75 mt-2"
            name="code"
            id="code"
            onChange={(event) => setVerifyCode(event.target.value)}
          />
          <button
            type="submit"
            disabled={!timer}
            className="btn btn-danger mt-3 align-self-center"
            id="submitButton"
          >
            ثبت
          </button>
          <div className="d-flex justify-content-end ms-4">
            <Countdown date={Date.now() + 120000} renderer={renderer} />
          </div>
        </form>
      </div>
    </>
  );
};

export default ConfirmSms;
