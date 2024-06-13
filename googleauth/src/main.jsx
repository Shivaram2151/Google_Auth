import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="98644650830-gdl0463hsgvp50f6rhj0tqv304u3gjgf.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider> 
  </React.StrictMode>,
)
