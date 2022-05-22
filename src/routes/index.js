import React from "react";
import Home from "../pages/home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header";
import Artist from "../pages/artist";
import Artdetails from "../pages/details";

const Nav = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/:username" element={<Artdetails />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Nav;
