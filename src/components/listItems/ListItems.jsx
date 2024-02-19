import React, { useState } from "react";

import { EXPANDLISTLABS } from "../../utils/constants";

import arrowImage from "../../img/arrow-down.svg";

const ListItems = ({ title }) => {

  const [isOpen, setOpen] = useState(true);

  return (
    <fieldset className="fieldset">
      <legend>
        <button className={`expand-collapse-button ${!isOpen ? "open" : ""}`}>
          <h3
            className="lab-name"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {title}
          </h3>
          <img  src={arrowImage}
            alt="expand"
            className={`img__arrows ${isOpen ? "open" : ""}`}
            ></img>
        </button>
      </legend>

      <div className={`group ${!isOpen ? "group-open" : ""}`}>
        <ul className={`group__links ${!isOpen ? "group-open" : ""}`}>
          {EXPANDLISTLABS.map(({name, link}) => (
            <li key={name}>
              <a href={link} className="group__items">{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </fieldset>
  );
};

export default ListItems;
