import "./styles.css";
import React, { useState } from 'react';
import ImgLogo from '../../assets/logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
    <div className="login-body">
      {userCurrentlyLogged ?
        <Redirect to="/" />
        :
        <>
          <img className="animal-crossing-logo" src={ImgLogo} alt="logotipo animal crossing" />
          <section className="login-container">
            <h3 className="form-title">Welcome back!</h3>
            <input
              className="form-input"
              value={loginEmail}
              type="email"
              placeholder="E-mail"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              className="form-input"
              value={loginPassword}
              type="password"
              placeholder="Senha"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <button className="submit-btn" onClick={login}>Login</button>
            <Link className="redirect-link" to="/sign-up">Ainda não é cadastrado? Cadastre-se.</Link>
          </section>
        </>
      }
    </div>
  )
}

export default LogIn;
