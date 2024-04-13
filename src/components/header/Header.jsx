import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";

import Logo from "../../UI/Logo";
import NavBar from "../navbar/NavBar";
import SingInButton from "../../UI/SingInButton";
// import LogOutButton from "../../UI/LogOutButton";
import { logout } from "../../modules/Auth/store/auth/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();


  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />

          <NavBar />

          <div className="auth-name">
            {user && <p className="hello-message">Привет {user.username.charAt(0).toUpperCase() + user.username.slice(1)}!</p>}
            {user ? (
              <LogoutIcon
                onClick={() => dispatch(logout())}
                className="logout"
                sx={{ color: "white" }}
              />
            ) : (
              <SingInButton />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
