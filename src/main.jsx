import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router'
import Product from './Pages/Product.jsx'



createRoot(document.getElementById('root')).render(
        <App/>
)
