import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../../config/firebase-config';
import { useAuth } from '../../context/AuthContext';

function SignUp() {

    const history = useHistory();

    const { userCurrentlyLogged } = useAuth();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            history.push('/')
            console.log(user);
        } catch (error) {
            alert(error.message);
        }
    };

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    return (
        <div className="register-user">
            {userCurrentlyLogged ?
                <Redirect to="/" />
                :
                <>
                    <h3>Registrar usuário</h3>
                    <input
                        value={registerEmail}
                        type="email"
                        placeholder="E-mail"
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input
                        value={registerPassword}
                        type="password"
                        placeholder="Senha"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                    <button onClick={register}>Enviar</button>
                    <Link to="/login">Já cadastrado? Faça login</Link>
                </>
            }
        </div>
    )
}

export default SignUp;
