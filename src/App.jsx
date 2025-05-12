import React from 'react'
import Header from './Components/Header'
import CategoriesList from './Components/CategoriesList'
import Slidebar from './Components/Slidebar'
import Home from './Pages/Home'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";
import Signin from './Pages/Signin'
import Product from './Pages/Product'
import Products from './Pages/Products'
import PageLayout from './Components/PageLayout'
import Cart from './Pages/Cart'

const router = createBrowserRouter(
  [
    {
      path: 'auth',
      element: <Signin />
    },
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={"home"} />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'products',
          children: [
            {
              index: true,
              element: <Products />
            },
            {
              path: ':productId',
              element: <Product/>
            }
          ]
        },
        {
          path: 'cart',
          element: <Cart/>
        }
      ]
    },
    {
      path: '*',
      element: <div>Page Not Found 404</div>
    }
  ]
)



export default function App() {

  return (<>
     <RouterProvider router={router} />
  </>
  )
}


