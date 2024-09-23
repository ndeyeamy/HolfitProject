// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // Import des styles globaux
import App from './App'; // Import du composant principal App


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Montre l'App sur l'élément avec l'id 'root' dans index.html
);


