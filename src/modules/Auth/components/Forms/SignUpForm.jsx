import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Input from "../../../../components/Input/Input";
import { clearError } from "../../store/authSlice";
import { register } from "../../index";
import { formatErrorMessage } from "../../helpers/errorHandlers";
import Loading from "../../../../components/loading/Loading";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { registered, loading, registrationError } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const { username, email, password, confirmPassword, name } = formData;
  //   console.log(formData)
  const [passwordError, setPasswordError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(registrationError);
    dispatch(clearError());

    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      return; // Не отправляем запрос, если пароли не совпадают
    }
    dispatch(register({ username, email, password, name }));
  };

  if (registered) {
    localStorage.setItem('userEmail', email);
    return <Navigate to={`/auth/verify-email/${username}`} />;
  }

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Создать аккаунт</h1>
        <Input
          name="name"
          type="text"
          className={`form-control`}
          value={name}
          onChange={handleChange}
          placeholder="ФИО (с большой буквы)"
          required
          // error={registrationError && registrationError.username}
        />
        <Input
          name="username"
          type="text"
          className={`form-control ${
            registrationError != null && registrationError.username ? "error-input" : ""
          }`}
          value={username}
          onChange={handleChange}
          placeholder="Логин"
          required
          error={registrationError && registrationError.username}
        />
        <Input
          name="email"
          type="email"
          className={`form-control ${
            registrationError != null && registrationError.email ? "error-input" : ""
          }`}
          value={email}
          onChange={handleChange}
          placeholder="Адрес электронной почты"
          required
          error={registrationError && registrationError.email}
        />
        <Input
          name="password"
          type="password"
          className={`form-control ${
            registrationError != null && registrationError.password ? "error-input" : ""
          }`}
          value={password}
          onChange={handleChange}
          placeholder="Пароль"
          required
          error={registrationError && registrationError.password}
        />
        <Input
          name="confirmPassword"
          type="password"
          className={`form-control ${passwordError ? "error-input" : ""}`}
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Подтвердите пароль"
          required
          error={passwordError}
        />
        {passwordError && (
          <>
            <p className="error-message">{passwordError}</p>
          </>
        )}
        {registrationError && (
          <>
            {Object.entries(registrationError).map(([field, errorMessages], index) => (
              <div key={index}>
                {Array.isArray(errorMessages) ? (
                  errorMessages.map((errorMessage, idx) => (
                    <p key={idx} className="error-message">
                      {formatErrorMessage(field, errorMessage.toString())}
                    </p>
                  ))
                ) : (
                  <p key={index} className="error-message">
                    {formatErrorMessage(field, errorMessages.toString())}
                  </p>
                )}
              </div>
            ))}
          </>
        )}
        {loading ? <Loading /> : <button type="submit">Зарегистрироваться</button>}
      </form>
    </div>
  );
};

export default SignUpForm;
