import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVBl8iDyQ3r67lkwxPL8WHRv4Y2qEo8_s",
  authDomain: "track-frontend.firebaseapp.com",
  projectId: "track-frontend",
  storageBucket: "track-frontend.appspot.com",
  messagingSenderId: "733415636251",
  appId: "1:733415636251:web:036e71b8859a25e1df27be",
  measurementId: "G-GPY0NG55CQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
