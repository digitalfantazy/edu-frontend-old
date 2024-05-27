import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../components/Input/Input";
import { clearError, clearPasswordReset } from "../../store/authSlice";
// import { passwordReset } from "../../api/index"; // Импортируйте thunk для сброса пароля
import Loading from "../../../../components/loading/Loading";

const PasswordResetForm = ({ onBack }) => {
  const dispatch = useDispatch();
  const { loading, loginError, passwordResetSuccess } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordReset = (event) => {
    event.preventDefault();
    dispatch(clearError());
    // dispatch(passwordReset(email));
  };

  React.useEffect(() => {
    if (passwordResetSuccess) {
      onBack();
      dispatch(clearPasswordReset());
    }
  }, [passwordResetSuccess, onBack, dispatch]);

  return (
    <form onSubmit={handlePasswordReset}>
      <h1>Восстановление пароля</h1>
      <Input
        name="email"
        type="email"
        className="form-control"
        value={email}
        onChange={handleEmailChange}
        placeholder="Введите ваш электронный адрес"
        required
      />
      {loading ? <Loading /> : <button type="submit">Восстановить пароль</button>}
      {loginError && <p className="error-message">{loginError}</p>}
      <button
        style={{
          background: "none",
          border: "none",
          color: "#512da8",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        type="button"
        onClick={onBack}
      >
        Назад
      </button>
    </form>
  );
};

export default PasswordResetForm;
