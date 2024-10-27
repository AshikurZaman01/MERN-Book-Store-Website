import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, loading, setLoading, registerUser, loginUser, signInWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

