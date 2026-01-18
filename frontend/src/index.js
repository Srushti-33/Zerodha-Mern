import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/About/AboutPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import ProductsPage from './landing_page/Products/ProductsPage'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar></Navbar>
<Routes>
  <Route path='/' element={<HomePage></HomePage>}></Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/about' element={<AboutPage></AboutPage>}></Route>
  <Route path='/product' element={<ProductsPage></ProductsPage>}></Route>
  <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
  <Route path='/support' element={<SupportPage></SupportPage>}></Route>
  
  <Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>
<Footer></Footer>
</BrowserRouter>
);


