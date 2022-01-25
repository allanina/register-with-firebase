import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { auth } from '../config/firebase-config';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [userCurrentlyLogged, setUserCurrentlyLogged] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUserCurrentlyLogged(currentUser);
    })

    const logout = async () => {
        await signOut(auth);
      };

    return (
        <AuthContext.Provider value=
            {{
                userCurrentlyLogged,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
