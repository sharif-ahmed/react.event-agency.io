/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCysSZaqFUwNZhVvC4wbOvnUmVUEOX9w7I",
  authDomain: "react-event-agnecy-io.firebaseapp.com",
  projectId: "react-event-agnecy-io",
  storageBucket: "react-event-agnecy-io.appspot.com",
  messagingSenderId: "76465820818",
  appId: "1:76465820818:web:8f196a10b09cbfe2aa024b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
