// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM2PSZjLo_1d_GwDmQCefDCF64JS2NHw0",
    authDomain: "sharp-science-386613.firebaseapp.com",
    projectId: "sharp-science-386613",
    storageBucket: "sharp-science-386613.appspot.com",
    messagingSenderId: "589661007828",
    appId: "1:589661007828:web:8b9d6b266541dd3337f041",
    measurementId: "G-GELEW16TF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);