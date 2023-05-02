import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider , signOut, GithubAuthProvider   } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>
    {
        return signOut(auth);
    }
    const google = ()=>{
       return signInWithPopup(auth, googleprovider);
    }
    const github =()=>{
        return signInWithPopup(auth, githubProvider)
    }
    const user = null
    const authInfo ={
        user,
        createUser,
        login,
        logOut,
        google,
        github
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;