import React from "react";
import { Link } from "react-router-dom"

const SingInButton = () => {
    return (
        <Link to="/login" className="sign-in-button">Войти</Link>
    );
}
 
export default SingInButton;