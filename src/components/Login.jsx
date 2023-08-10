import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async () => {};
  
    return (
      <div>
        <h1>Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Signup</button>
        <span>
          Don't an account?
          <Link to="/signup">Signup</Link>
        </span>
      </div>
    );
}

export default Login;
