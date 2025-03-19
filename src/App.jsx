// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashBoard from "./components/DashBoard";
import Products from "./components/Products";
import Category from "./components/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Category/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
