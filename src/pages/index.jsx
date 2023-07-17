import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/Works" element={<Projects />} />
    </Routes>
  );
};

export default Rout;
