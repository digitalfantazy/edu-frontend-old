
import { MENU } from "../../utils/constants";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {MENU.map(({ name, link }) => (
          <li className="nav__item" key={name} >
            <a href={link} className="nav__link">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
