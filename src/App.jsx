// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Products from "./components/Products";
import Category from "./components/Category";
import Navbar from './components/Navbar';
import Heading from "./components/Heading";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Heading />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;