import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar.js';
import Background from './component/Background.js';
import Approach from './component/Approach.js';
import Member from './component/Member.js';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Background />
    <Approach />
    <Member />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
