import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import './App.css';
import { auth } from './firebase-config'

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
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => { };

  const logout = async () => { };

  return (
    <div className="App">
      <div className="register-user">
        <h3>Registrar usuário</h3>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
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
          type="email"
          placeholder="E-mail"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button>Enviar</button>
      </div>
      <div className="logged-user">
        <span>Usuário logado em:</span>
        {userCurrentlyLogged.email}
        <button>Logout</button>
      </div>
    </div>
  );
}

export default App;