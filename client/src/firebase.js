// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut as userSignOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFbDAxrpBqcHGkYcHisXuyKlxSdUah2wY",
    authDomain: "todo-app-9331f.firebaseapp.com",
    projectId: "todo-app-9331f",
    storageBucket: "todo-app-9331f.appspot.com",
    messagingSenderId: "491500677243",
    appId: "1:491500677243:web:2bb8759a8c5806e446dade",
    measurementId: "G-P4GVWYJC9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const signIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            console.log("User signed in: ", result.user.uid);
        })
        .catch((error) => {
            console.log("User aborted sign-in window")
        });
};

const signOut = () => {
    userSignOut(auth);
};

export { app, auth, signIn, signOut, db };
