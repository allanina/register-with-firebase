import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../context/AuthContext';

function Dashboard() {

  const { userCurrentlyLogged, logout } = useAuth();

  return (
    <div className="logged-user">
      {userCurrentlyLogged ?
        <>
          <span>Usuário logado em:</span>
          <span>{userCurrentlyLogged?.email}</span>
          <button onClick={logout}>Logout</button>
        </>
        :
        <Redirect to="/login" />
    }
    </div>
  )
}

export default Dashboard;
