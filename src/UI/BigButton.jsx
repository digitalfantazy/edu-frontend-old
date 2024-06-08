import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BigButton = ({ scrollToCatalog }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      scrollToCatalog();
    } else {
        navigate("/auth");
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      Перейти к работе
    </button>
  );
};

export default BigButton;
