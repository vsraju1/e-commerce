import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Product from './components/Product/Product.jsx'
import Products from './components/Products/Products.jsx'
import './App.css'
import SearchProduct from './components/SearchProduct/SearchProduct.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="products" element={<Products/>} />
      <Route path="product" element={<Product/>} />
      <Route path="products/:id" element={<SearchProduct />} />
      <Route path="product/:id" element={<Product />} />
    </Route>
  )
  
)

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home />
//   },
//   {
//     path:"/products",
//     element:<Products />
//   },
//   {
//     path:"/product/:id",
//     element:<Product />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
