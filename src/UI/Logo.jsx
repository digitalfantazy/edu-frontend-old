import { Link } from "react-router-dom";

const Logo = () => {
    return (
    <div className="header__logo"> 
        <Link to="/" className="logo" >
            VirtLab
        </Link>
    </div>
    );
}
 
export default Logo;