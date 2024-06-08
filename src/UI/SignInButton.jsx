import React from "react";
import { Link } from "react-router-dom";


const SignInButton = () => {
    return (
        <Link to="/auth" className="sign-in-button">Войти</Link>
    );
}
 
export default SignInButton;