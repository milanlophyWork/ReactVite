import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> {/* React is runned twice because react is runned in strict mode. strict mode executes application twice for debugging purposes. */}
    <App />
  // </StrictMode>, {/* strict mode is used whenever your application is running in dev mode */}
)
