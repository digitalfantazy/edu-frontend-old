import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


import SignInForm from "./Forms/SignInForm";
import SignUpForm from "./Forms/SignUpForm";
import TogglePanel from "./TogglePanel";
import "../styles/auth.scss"

const AuthContainer = () => {
  const [activeForm, setActiveForm] = useState("sign-in");
  const { registered } = useSelector((state) => state.auth);

  useEffect(() => {
    if (registered) {
      setActiveForm("sign-in"); // После успешной регистрации переключаемся на форму входа
    }
  }, [registered]);

  const handleToggleClick = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div className="auth">
      <div className={`auth-container ${activeForm === "sign-up" ? "active" : ""}`} id="auth-container">
        <SignInForm />
        <SignUpForm />
        <TogglePanel activeForm={activeForm} handleToggleClick={handleToggleClick} />
      </div>
    </div>
  );
};

export default AuthContainer;



