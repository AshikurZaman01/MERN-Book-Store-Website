// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf_iyKWsyapmhoLQxQVZL7OT9Yrb-EPOg",
    authDomain: "book-store-c9bee.firebaseapp.com",
    projectId: "book-store-c9bee",
    storageBucket: "book-store-c9bee.appspot.com",
    messagingSenderId: "185709656602",
    appId: "1:185709656602:web:a93814d82d0d04e0e72fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
