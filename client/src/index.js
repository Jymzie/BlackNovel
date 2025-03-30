import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
 import App from './App';
 

 //Excluding App.css, App.test.js, logo.svg, reportWebVitals.js and setupTest.js in the src folder 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);