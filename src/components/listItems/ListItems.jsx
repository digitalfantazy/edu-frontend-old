import React, { useState } from "react";

import { EXPANDLISTLABS } from "../../utils/constants";

import arrowImage from "../../img/arrow-down.svg";
import { NavLink } from "react-router-dom";

const ListItems = ({ title }) => {


  const setActiveLink = ({isActive}) => () => isActive ? 'active-link' : '';


  const [isOpen, setOpen] = useState(true);

  const list = EXPANDLISTLABS[title] || [];

  return (
    <fieldset className="fieldset">
      <legend>
        <button
          className={`expand-collapse-button ${!isOpen ? "open" : ""}`}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <h3 className="lab-name">{title}</h3>
          <img
            src={arrowImage}
            alt="expand"
            className={`img__arrows ${isOpen ? "open" : ""}`}
          ></img>
        </button>
      </legend>

      <div className={`group ${!isOpen ? "group-open" : ""}`}>
        <ul className={`group__links ${!isOpen ? "group-open" : ""}`}>
          {list.map(({ name, link }) => (
            <li key={name}>
              <NavLink
                to={`${link}`}
                className="group__items"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </fieldset>
  );
};

export default ListItems;
