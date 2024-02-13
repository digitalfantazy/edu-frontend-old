import React from "react";


import Logo from "../../UI/Logo";
import NavBar from "../navbar/NavBar";
import SingInButton from "../../UI/SingInButton"


const Header = () => {
  return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            

                <Logo />

                <NavBar />

              <div className="auth">
                <SingInButton />   
              </div>  
            
          </div>
        </div>
      </header>
  );
}
 
export default Header;


