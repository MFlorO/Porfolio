import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToggleColorMode from './ToggleColorMode/ToggleColorMode';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

//IDIOMAS
import "./componentes/Language/i18n.js"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={null}>
    <Router>
      <ToggleColorMode />
    </Router>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
