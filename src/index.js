import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import { App } from './components/index';
import { AuthProvider } from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <AuthProvider>
      <App />
    </AuthProvider>

  </React.StrictMode>
);

