import { Link } from "react-router-dom";

const Logo = () => {
    return (
    <div className="header__logo"> 
        <Link className="logo" href="/">
            VirtLab
        </Link>
    </div>
    );
}
 
export default Logo;