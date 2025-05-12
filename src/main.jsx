import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router'
import Product from './Pages/Product.jsx'
import CartContextProvider from './Contexts/CartContext.jsx'
import ProductsContextProvider from './Contexts/ProductsContext.jsx'


createRoot(document.getElementById('root')).render(
   <CartContextProvider>
      <ProductsContextProvider>
         <App />
      </ProductsContextProvider>
   </CartContextProvider>
)
