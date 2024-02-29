import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import "bootstrap/dist/js/bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import {Toaster} from 'react-hot-toast'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </BrowserRouter>
  </React.StrictMode>
);
