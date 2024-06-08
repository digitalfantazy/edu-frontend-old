import React from "react";

import SingInButton from "../../UI/SignInButton";

const NotAuthorized = () => {
    return ( <div className="alert-messagecontainer">
        <p className="alert-textmesaage">Войдите или зарегистрируйтесь чтобы начать работу</p>
        <SingInButton />

    </div> );
}
 
export default NotAuthorized;