import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './App.css';
import { auth } from './config/firebase-config'

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [userCurrentlyLogged, setUserCurrentlyLogged] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUserCurrentlyLogged(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRegisterEmail("")
      setRegisterPassword("")
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div className="register-user">
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
      </div>
      <div className="login-user">
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
      </div>
      <div className="logged-user">
        <span>Usuário logado em:</span>
        {userCurrentlyLogged?.email}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;