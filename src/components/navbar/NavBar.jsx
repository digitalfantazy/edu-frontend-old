import React from "react";
import { Link } from "react-router-dom";

import { MENU } from "../../utils/constants";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {MENU.map(({ name, link }) => (
          <li className="nav__item" key={name} >
            <Link to={`#/${link}`} className="nav__link">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
