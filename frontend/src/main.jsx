import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginContext from './ContextApi/LoginContext.jsx'
import RefreshContext from './ContextApi/RefreshContext.jsx'
import HeaderContext from './ContextApi/HeaderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContext>
        <RefreshContext>
          <HeaderContext>
            <App />
          </HeaderContext>
        </RefreshContext>
      </LoginContext>
    </BrowserRouter>
  </React.StrictMode>,
)
