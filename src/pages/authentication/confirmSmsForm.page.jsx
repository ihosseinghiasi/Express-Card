import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhone, setCodeVerify } from "../../services/authenticationService";
import Countdown from "react-countdown";
import "../../css/shop/smsForm.css";

const ConfirmSms = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [verifyCode, setVerifyCode] = useState();
  const [timer, setTimer] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPhoneNumber();
  }, []);

  const getPhoneNumber = async () => {
    await getPhone().then((res) => {
      if (res.status === 200) {
        setPhoneNumber(res.data.data.phoneNumber);
      }
    });
  };

  async function sendVerifyCode(e) {
    e.preventDefault();
    await setCodeVerify(verifyCode).then((res) => {
      if (res.status === 200) {
        navigate("/register");
      }
    });
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setTimer(false);
    } else {
      return (
        <span style={{ border: "0px" }}>
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
            onChange={(e) => setVerifyCode(e.target.value)}
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
