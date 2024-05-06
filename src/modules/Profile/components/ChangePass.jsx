import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changePassword } from "../api/changePassword.js";
import { clearPasswordUpdate } from "../../Auth/store/authSlice.js";
import { serverMessages } from "../helpers/serverMessages.js";

import Input from "../../../components/Input/Input.jsx";
import Loading from "../../../components/loading/Loading.jsx";

const ChangePass = () => {
  const dispatch = useDispatch();
  const { loading, error, passwordUpdated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const { current_password, new_password, confirm_new_password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (new_password !== confirm_new_password) {
    //   alert("Пароли не совпадают");
    // }

    // if (current_password === new_password) {
    //   alert("Новый пароль схож со старым");
    //   return;
    // }

    dispatch(changePassword({ current_password, new_password, confirm_new_password }));
  };


  useEffect(() => {
    return () => {
      dispatch(clearPasswordUpdate());
    };
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit} className="info-item">
        <div className="field">
          <Input
            name="current_password"
            type="password"
            className={`form-control ${
              error != null && error.current_password ? "error-input" : ""
            }`}
            placeholder="Текущий пароль"
            onChange={handleChange}
            value={current_password}
            error={error}
            required
          ></Input>
        </div>

        <div className="profile-hr"></div>

        <div className="field">
          <Input
            name="new_password"
            type="password"
            className={`form-control ${error != null && error.new_password ? "error-input" : ""}`}
            placeholder="Новый пароль"
            onChange={handleChange}
            value={new_password}
            error={error}
            required
          ></Input>
        </div>
        <div className="field">
          <Input
            name="confirm_new_password"
            type="password"
            className={`form-control ${
              error != null && error.confirm_new_password ? "error-input" : ""
            }`}
            onChange={handleChange}
            placeholder="Повторите пароль"
            value={confirm_new_password}
            error={error}
            required
          ></Input>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="button-save">
            <button type="submit">Сохранить</button>
          </div>
        )}
      </form>
        <>
        {error && <p className="error-message">{serverMessages(error)}</p>}
        {passwordUpdated && <p className="success-message">Успешно!</p>}
        </>
    </>
  );
};

export default ChangePass;
