import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/Global.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
