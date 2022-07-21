import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateEmail,
    updatePassword,
    User,
    UserCredential,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../constants/firebase";

export interface IAuthContext {
    currentUser: User | null;
    logIn: (email: string, password: string) => Promise<UserCredential>;
    googleLogin: () => Promise<UserCredential>;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
    emailPasswordReset: (email: string) => Promise<void>;
    updateUserEmail: (user: User, email: string) => Promise<void> | null;
    updateUserPassword: (user: User, password: string) => Promise<void> | null;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function useAuth() {
    return useContext(AuthContext) as IAuthContext;
}

export function AuthProvider({ children }: { children: React.ReactChild }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    // const [loading, setLoading] = useState(true);

    function signUp(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function googleLogin(): Promise<UserCredential> {
        var googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    function logOut(): Promise<void> {
        return auth.signOut();
    }

    function emailPasswordReset(email: string): Promise<void> {
        return sendPasswordResetEmail(auth, email);
    }

    function updateUserEmail(user: User, email: string): Promise<void> | null {
        return currentUser ? updateEmail(user, email) : null;
    }

    function updateUserPassword(
        user: User,
        newPassword: string
    ): Promise<void> | null {
        return currentUser ? updatePassword(user, newPassword) : null;
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            // setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        logIn,
        googleLogin,
        signUp,
        logOut,
        emailPasswordReset,
        updateUserEmail,
        updateUserPassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
