import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { EXPANDLISTLABS } from "../../helpers/helpers";
import { toggleListOpen } from "../../store/catalogSlice";

import arrowImage from "../../img/arrow-down.svg";

const ListItems = ({ title }) => {
  // console.log(toggleListOpen)
  const isOpen = useSelector((state) => state.catalog.listOpen[title]);
  const dispatch = useDispatch();
  const location = useLocation();

  //   console.log(isOpen)

  const list = EXPANDLISTLABS[title] || [];

  return (
    <fieldset className="fieldset">
      <legend>
        <button
          className={`expand-collapse-button ${isOpen ? "open" : ""}`}
          onClick={() => {
            dispatch(toggleListOpen({ title }));
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
                className={`group__items ${
                  location.pathname === `/${link}/about` || location.pathname === `/${link}/info`
                    ? "active"
                    : ""
                }`}
              >
                <FiberManualRecordIcon className="icon" style={{ fontSize: 10 }}/>
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
