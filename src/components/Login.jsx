import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-config";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        signInWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
        console.log(error);
      }
    };

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
      if (currentUser) navigate("/");
    })
  
    return (
      <div>
        <h1>Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <span>
          Don't an account?
          <Link to="/signup">Signup</Link>
        </span>
      </div>
    );
}

export default Login;
