import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => (
  <Router>
    <Navbar />
    <main className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
