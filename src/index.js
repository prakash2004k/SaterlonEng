// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);