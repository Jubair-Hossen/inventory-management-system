// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ehHOKtGRpHTIBmpV76uBPwjO__1_p60",
  authDomain: "inventory-management-sys-a7b08.firebaseapp.com",
  projectId: "inventory-management-sys-a7b08",
  storageBucket: "inventory-management-sys-a7b08.appspot.com",
  messagingSenderId: "1094483577823",
  appId: "1:1094483577823:web:1ec39a5ae89f2a42c1126a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;