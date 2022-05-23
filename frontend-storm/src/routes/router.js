import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Index from "../pages/Index/index";
import Login from "../pages/Login/index"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/index" exact></Route>
        <Route element={<Login />} path="/" exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
