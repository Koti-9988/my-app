import React from "react";
import { ReactDOM } from "react-dom/client";
import {Route, Routes } from 'react-router-dom';

import Home from './home';

import About from './about';

import Products from './products';
import Posts from "./posts";
import Notfound from "./notfound";

function Menu(){

    return(
      <>



        <div className="menu-items">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
           
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<Notfound />} />
          </Routes>

        </div>
        </>
    )
}
export default Menu;