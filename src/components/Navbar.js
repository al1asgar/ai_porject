import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-black-500 text-white p-4 flex justify-between">
    <h1 className="text-lg font-bold">Weather App</h1>
    <div>
      <Link to="/" className="px-3">Home</Link>
      <Link to="/weather" className="px-3">Weather</Link>
      <Link to="/blog" className="px-3">Blog</Link>
      <Link to="/contact" className="px-3">Contact</Link>
      <Link to="/login" className="px-3">Login</Link>
    </div>
  </nav>
);

export default Navbar;
