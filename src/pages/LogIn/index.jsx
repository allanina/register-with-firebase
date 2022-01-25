import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../../config/firebase-config';
import { useAuth } from '../../context/AuthContext';

function LogIn() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { userCurrentlyLogged } = useAuth();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoginEmail("");
      setLoginPassword("");
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-user">
      {userCurrentlyLogged ?
        <Redirect to="/" />
        :
        <>
          <h3>Login de usuário</h3>
          <input
            value={loginEmail}
            type="email"
            placeholder="E-mail"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            value={loginPassword}
            type="password"
            placeholder="Senha"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button onClick={login}>Enviar</button>
          <Link to="/sign-up">Ainda não é cadastrado? Cadastre-se.</Link>
        </>
      }
    </div>
  )
}

export default LogIn;
