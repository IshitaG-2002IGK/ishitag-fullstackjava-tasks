import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloClass from './HelloClass';
import reportWebVitals from './reportWebVitals';
import HelloClassSimple from './HelloClassSimple';
import HelloCounter from './HelloCounter';
import Toggle from './Toggle';
import ToggleNew from './ToggleNew';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HelloClass /><br></br>
    <HelloClassSimple /><br></br>
    <HelloCounter /><br></br>
    <Toggle /><br></br><br></br>
    <ToggleNew /><br></br>
  </React.StrictMode>
);


reportWebVitals();
