import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const SingUpPage = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to="/login"/>;
        }

    return (
        <div className="login-form">
            <form className="form-signin" onSubmit={submit}>

                <h1 className="login-title">Регистрация</h1>

                <div className="form-floating">
                    <input type="name" className="form-control" id="floatingInputName" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="floatingInput">Имя</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="floatingInput">Адрес электроной почты</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>
            
                <button className="btn btn-login registration" type="submit">Зарегистрироваться</button>

            </form>
        </div>
    );
}
 
export default SingUpPage;