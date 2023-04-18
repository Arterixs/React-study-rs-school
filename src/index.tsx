import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
