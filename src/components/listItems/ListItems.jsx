import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { EXPANDLISTLABS } from "../../utils/constants";
import { toggleListOpen } from "../../store/reducers/listReducer";

import arrowImage from "../../img/arrow-down.svg";

const ListItems = ({ title }) => {

  const isOpen = useSelector(state => state.list[title]);
  const dispatch = useDispatch();



  const list = EXPANDLISTLABS[title] || [];

  return (
    <fieldset className="fieldset">
      <legend>
        <button
          className={`expand-collapse-button ${isOpen ? "open" : ""}`}
          onClick={() => {
            dispatch(toggleListOpen({title}));
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

      <div className={`group ${isOpen ? "group-open" : ""}`}>
        <ul className={`group__links ${isOpen ? "group-open" : ""}`}>
          {list.map(({ name, link }) => (
            <li key={name}>
              <NavLink
                to={`/${link}/programa`}
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
