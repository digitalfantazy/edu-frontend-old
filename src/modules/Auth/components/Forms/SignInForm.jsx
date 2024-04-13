import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Input from "../Input/Input";
import { clearError, resetRegistered, } from "../../store/auth/authSlice";
import { login } from "../../api/index";

const SignInForm = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, loginError, registered } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (registered) dispatch(resetRegistered());
  }, [dispatch, registered]);

  const { username, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(error);
    dispatch(clearError());

    dispatch(login({ username, password }));
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSubmit}>
        <h1>Вход</h1>
        <Input
          name="username"
          type="text"
          className="form-control"
          value={username}
          onChange={handleChange}
          placeholder="Имя пользователя"
          required
          error={loginError}
        />
        <Input
          name="password"
          type="password"
          className="form-control"
          value={password}
          onChange={handleChange}
          placeholder="Пароль"
          required
          error={loginError}
        />
        {/* Нужен компонент */}
        <div className="social-icons">
          <span>Вход через </span>
          <a href="3" className="icon">
            <i className="fa-brands fa-google" style={{ color: "#B197FC" }}></i>
          </a>
        </div>
        <span>Забыли пароль?</span>
        {loginError && (
          <>
            <div>
              <p className="error-message">
                {loginError === "No active account found with the given credentials"
                  ? "Неверное имя пользователя или пароль"
                  : loginError}
              </p>
            </div>
          </>
        )}
        {loading ? (
          <div className="loading">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <button type="submit">Войти</button>
        )}
      </form>
    </div>
  );
};

export default SignInForm;
