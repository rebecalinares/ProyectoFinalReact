import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClq4riBQE0t2APg08rpKNcjFip_d2EEfg",
  authDomain: "proyecto-final---react.firebaseapp.com",
  projectId: "proyecto-final---react",
  storageBucket: "proyecto-final---react.appspot.com",
  messagingSenderId: "331212700618",
  appId: "1:331212700618:web:9e7c6b27a1039d6d3fed33"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
