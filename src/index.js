import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import "./components/style/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
