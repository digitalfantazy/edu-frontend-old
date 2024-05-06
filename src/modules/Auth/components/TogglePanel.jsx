import React from "react";

const TogglePanel = ({ activeForm, handleToggleClick }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div
          className={`toggle-panel ${
            activeForm === "sign-in" ? "toggle-right" : "toggle-left"
          }`}
        >
          <h1>
            {activeForm === "sign-in" ? "Нет аккаунта?" : "Есть аккаунт?"}
          </h1>
          <p>
            {activeForm === "sign-in"
              ? "Зарегистрируйтесь, чтобы воспользоваться всеми функциями сайта"
              : "Используйте данные для входа на сайт"}
          </p>
          <button
            className="hidden"
            id={activeForm === "sign-in" ? "login" : "register"}
            onClick={() =>
              handleToggleClick(
                activeForm === "sign-in" ? "sign-up" : "sign-in"
              )
            }
          >
            {activeForm === "sign-in" ? "Зарегистрироваться" : "Войти"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TogglePanel;
