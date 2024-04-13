import { Link } from "react-router-dom";

const Logo = () => {
    return (
    <div className="header__logo"> 
        <Link className="logo" to="/">
            VirtLab
        </Link>
    </div>
    );
}
 
export default Logo;