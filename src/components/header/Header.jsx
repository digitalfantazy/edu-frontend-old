import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Logo from "../../UI/Logo";
import NavBar from "../navbar/NavBar";
import SignInButton from "../../UI/SignInButton";
import { logout } from "../../modules/Auth/index";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  // console.log(user)
  const dispatch = useDispatch();

  const formatName = (fullName) => {
    const names = fullName.split(" ");
    if (names.length === 3) {
      return `${names[1]} ${names[0].charAt(0)}. ${names[2].charAt(0)}.`; 
    }
    return fullName; 
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />

          <NavBar />

          <div className="auth-logo">
            {user ? (
              <>
                <Link to="/profile">
                  <p className="hello-message">
                    <AccountCircleIcon className="profile-icon" />
                    {formatName(user.name)}
                  </p>
                </Link>

                <LogoutIcon
                  onClick={() => dispatch(logout())}
                  className="logout"
                  sx={{ color: "white" }}
                />
              </>
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
