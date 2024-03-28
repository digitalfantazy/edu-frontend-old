import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


// import { formatErrorMessage } from "../utils/formatErrorMessage";
import { resetRegistered,login,clearError,} from "../store/reducers/authSlice";

import SignUpButton from "../UI/SignUpButton";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, registered, error } = useSelector(
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
    console.log(error);

    dispatch(clearError());

    dispatch(login({ username, password }));
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-form">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="login-title">Вход</h1>

        <div className="form-floating">
          <input
            name="username"
            type="text"
            className="form-control"
            id="floatingInput"
            value={username}
            onChange={handleChange}
            style={
                error
                  ? { backgroundColor: "rgba(244, 68, 68, 0.203)" }
                  : {}
              }
          />

          <label htmlFor="floatingInput">Имя пользователя</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            onChange={handleChange}
            style={
                error 
                  ? { backgroundColor: "rgba(244, 68, 68, 0.203)" }
                  : {}
              }
          />

          <label htmlFor="floatingPassword">Пароль</label>
        </div>
        {error && (
          <>
            <div>
              <p className="error-message">
                {error === "No active account found with the given credentials"
                  ? "Неверное имя пользователя или пароль"
                  : error}
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
          <div className="btn1">
            <button className="btn btn-login" type="submit">
              Войти
            </button>
            <div className="sign-up">
              <p>Еще не зарегистрированы?</p>
              <SignUpButton />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
