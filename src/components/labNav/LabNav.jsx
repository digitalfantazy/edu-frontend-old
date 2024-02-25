import { NavLink } from "react-router-dom";

import { TABLINKS } from "../../utils/constants";

const LabNav = () => {

  return (
    <div className="lab-nav">
      <ul className="tab-list">
        {TABLINKS.map(({ name, link }) => (
          <li className="tab" key={name}>
            <NavLink to= {`${link}`} className="tab-button">{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabNav;
