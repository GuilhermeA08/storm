import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
