import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { register, clearError } from "../store/reducers/authSlice";
import { formatErrorMessage } from "../utils/formatErrorMessage";

const SingUpPage = () => {
  const dispatch = useDispatch();

  const { registered, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(error);

    dispatch(clearError());

    dispatch(register({ username, email, password }));
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="login-form">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="login-title">Регистрация</h1>

        <div className="form-floating">
          <input
            name="username"
            type="text"
            className="form-control"
            id="floatingInputName"
            placeholder="username"
            value={username}
            onChange={handleChange}
            required
            style={
              error && error.username
                ? { backgroundColor: "rgba(244, 68, 68, 0.203)" }
                : {}
            }
          />
          <label htmlFor="floatingInput">Имя пользователя</label>
        </div>

        <div className="form-floating">
          <input
            name="email"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="email"
            value={email}
            onChange={handleChange}
            required
            style={
              error && error.email
                ? { backgroundColor: "rgba(244, 68, 68, 0.203)" }
                : {}
            }
          />
          <label htmlFor="floatingInput">Адрес электроной почты</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
            value={password}
            onChange={handleChange}
            required
            style={
              error && error.password
                ? { backgroundColor: "rgba(244, 68, 68, 0.203)" }
                : {}
            }
          />
          <label htmlFor="floatingPassword">Придумайте пароль</label>
        </div>
        {error && (
          <>
            {Object.entries(error).map(([field, errorMessages], index) => (
              <div key={index}>
                {errorMessages.map((errorMessage, idx) => (
                  <p key={idx} className="error-message">
                    {formatErrorMessage(field, errorMessage)}
                  </p>
                ))}
              </div>
            ))}
          </>
        )}
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button className="btn btn-login registration" type="submit">
            {" "}
            Зарегистрироваться{" "}
          </button>
        )}
      </form>
    </div>
  );
};

export default SingUpPage;
