import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider , signOut, GithubAuthProvider, signInWithPopup, onAuthStateChanged   } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>
    {
        setLoading(true)
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
  
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>
            {
                setUser(currentUser);
                setLoading(false)
            });
            return ()=>{
                return unsubscribe();
            }
    
    },[])

   

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