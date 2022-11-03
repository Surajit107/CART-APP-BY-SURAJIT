import React from 'react'
import AddProducts from './pages/AddProducts'
import ViewProducts from './pages/ViewProducts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'

const CartAPP = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/view-products' element={<ViewProducts/>}/>
                    <Route path='/view-products/:id' element={<ViewProducts/>}/>
                    <Route path='/details/:id' element={<ProductDetails/>}/>
                    <Route path='/add-product' element={<AddProducts/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default CartAPP
