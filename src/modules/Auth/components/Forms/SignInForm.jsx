import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Input from "../../../../components/Input/Input";
import { clearError, resetRegistered } from "../../store/authSlice";
import { login } from "../../api/loginFetch";
import Loading from "../../../../components/loading/Loading";

const SignInForm = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, loginError, registered, isVerificated } = useSelector(
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
        {isVerificated ? (
          <p
            style={{
              fontSize: "18px",
              color: "green",
              padding: "10px",
              backgroundColor: "#f4f4f4",
              border: "1px solid #ccc",
              borderRadius: "3px",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Успешно! Теперь вы можете войти в свой аккаунт
          </p>
        ) : (
          ""
        )}
        <h1>Вход</h1>
        <Input
          name="username"
          type="text"
          className={`form-control ${loginError ? "error-input" : ""}`}
          value={username}
          onChange={handleChange}
          placeholder="Логин"
          required
          error={loginError}
        />
        <Input
          name="password"
          type="password"
          className={`form-control ${loginError ? "error-input" : ""}`}
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
        {loading ? <Loading /> : <button type="submit">Войти</button>}
      </form>
    </div>
  );
};

export default SignInForm;
