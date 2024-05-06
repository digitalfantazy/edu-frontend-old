import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { sendCode } from "../index";
import { resendCode } from "../index";
import { TokenErrors } from "../helpers/errorHandlers";
import useTimer from "../hooks/useTimer";
import Input from "../../../components/Input/Input";
import Loading from "../../../components/loading/Loading";

import "../styles/verify.scss";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const email = localStorage.getItem("userEmail");
  const { isVerificated, error, loading } = useSelector((state) => state.auth);

  const { timeLeft, resetTimer } = useTimer(59);
  const [opt_code, setOpt_code] = useState("");

  const handleChange = (event) => {
    setOpt_code(event.target.value);
  };

  const handleSubmitSend = (e) => {
    e.preventDefault();
    dispatch(sendCode({ username, opt_code }));
  };

  const handleResend = (e) => {
    e.preventDefault();
    // console.log(email)
    dispatch(resendCode({ email }));
    resetTimer();
  };

  if (isVerificated) {
    return <Navigate to={`/auth`} />;
  }

  return (
    <div className="verify">
      <div className="verify-container">
        <h1>Подтверждение электронного адреса</h1>
        <p>Введите код подтверждения, отпраленный по адресу: {email}</p>
        <form onSubmit={handleSubmitSend}>
          <Input
            className={`form-control ${error ? "error-input" : ""}`}
            type="text"
            placeholder="Код подтверждения"
            onChange={handleChange}
            error={error}
          />
          {error && <div className="error-message">{TokenErrors(error)}</div>}
          {loading ? <Loading /> : <button type="submit">Отправить</button>}
        </form>
        <div className="resend-button">
          <button
            type="button"
            onClick={handleResend} // Перезапуск таймера
            disabled={timeLeft !== 0} // Делаем кнопку неактивной, пока таймер не дойдет до 0
          >
            {timeLeft === 0
              ? "Отправить код повторно"
              : `Отправить код повторно через (${timeLeft} сек)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
