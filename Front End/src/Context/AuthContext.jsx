import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();



export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const registerUser = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = async (email, password) => {
        return signInWithGoogle(auth, email, password)
    }

    return (
        <AuthContext.Provider value={{ currentUser, loading, setLoading, registerUser, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}
