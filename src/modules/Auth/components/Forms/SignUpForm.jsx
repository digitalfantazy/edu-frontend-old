import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Input from "../Input/Input";
import { clearError } from "../../store/auth/authSlice";
import { register } from "../../api/index";
import { formatErrorMessage } from "../../helpers/errorHandlers";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { registered, loading, registrationError } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  //   console.log(formData)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registrationError);

    dispatch(clearError());
    dispatch(register({ username, email, password }));
  };

  if (registered) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Создать аккаунт</h1>
        <Input
          name="username"
          type="text"
          className="form-control"
          value={username}
          onChange={handleChange}
          placeholder="Имя пользователя"
          required
          error={registrationError && registrationError.username}
        />
        <Input
          name="email"
          type="email"
          className="form-control"
          value={email}
          onChange={handleChange}
          placeholder="Адрес электронной почты"
          required
          error={registrationError && registrationError.email}
        />
        <Input
          name="password"
          type="password"
          className="form-control"
          value={password}
          onChange={handleChange}
          placeholder="Пароль"
          required
          error={registrationError && registrationError.password}
        />
        {registrationError && (
          <>
            {Object.entries(registrationError).map(
              ([field, errorMessages], index) => (
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
              )
            )}
          </>
        )}
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button type="submit">Зарегистрироваться</button>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
