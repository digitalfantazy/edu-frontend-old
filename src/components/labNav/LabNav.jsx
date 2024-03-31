import { NavLink, useParams } from "react-router-dom";


import { TABLINKS } from "../../utils/constants";

const LabNav = () => {

  const { labId } = useParams();

  return (
    <div className="lab-nav">
      <ul className="tab-list">
        {TABLINKS.map(({ name, link }) => (
          <li className="tab" key={name}>
            <NavLink to= {`/${labId}/${link}`} className="tab-button">{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabNav;
