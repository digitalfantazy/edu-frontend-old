import { useState } from "react";
import { Navigate } from "react-router-dom";

import SignUpButton from "../UI/SignUpButton";


const LoginPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);
    
    const submit = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to="/"/>;
        }

    return (
        <div className="login-form">
            <form className="form-signin" onSubmit={submit}>

                <h1 className="login-title">Вход</h1>
            
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                    onChange={e => setEmail(e.target.value)}/>

                    <label htmlFor="floatingInput">Адрес электроной почты</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                    onChange={e => setPassword(e.target.value)} />

                    <label htmlFor="floatingPassword">Пароль</label>
                </div>
            
                <button className="btn btn-login" type="submit">Войти</button>

                <div className="sign-up">
                    <p>Еще не зарегистрированы?</p>
                    <SignUpButton />
                </div>
            </form>
        </div>
            
    );
}
 
export default LoginPage;