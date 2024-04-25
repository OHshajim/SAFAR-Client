// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdDVY6lxJIypEObMTBkL-sIxri3-q1b_A",
    authDomain: "b9-a10-tourism.firebaseapp.com",
    projectId: "b9-a10-tourism",
    storageBucket: "b9-a10-tourism.appspot.com",
    messagingSenderId: "93356556891",
    appId: "1:93356556891:web:475a542a72dd9823f4f57e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;