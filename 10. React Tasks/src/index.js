import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Description.css';
import './Image.css';
import App from './App';
import Description from './Description';
import Product from './Product';
import ProductPage from './ProductPage';
import VideoPlayer from './VideoPlayer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Description />
    <Product />
    <ProductPage />
    <VideoPlayer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

