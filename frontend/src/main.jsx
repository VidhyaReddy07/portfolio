import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set document title from Vite env variable (VITE_APP_TITLE)
try {
  const title = import.meta.env.VITE_APP_TITLE;
  if (title) document.title = title;
} catch (e) {
  // import.meta may not be available in some editors — ignore silently
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)