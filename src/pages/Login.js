import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
       <div>
        <br />
      <Link to="/forgotpassword" className="px-3">Did You Forgot Password!</Link>
      </div>
    </div>
  );
};

export default Login;
