import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/aboutMe" element={<AboutMe />} />
    </Routes>
  );
};

export default Rout;
