import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Landing_page/LandingPage";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

export default function Router() {
  return (
    <HashRouter basename="/">
      <Routes>
        <React.Fragment>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing_page" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </React.Fragment>
      </Routes>
    </HashRouter>
  );
}
