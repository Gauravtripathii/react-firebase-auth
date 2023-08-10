import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../firebase-config";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser) navigate("/");
  })

  return (
    <div>
      <h1>Signup</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <span>
        Already have an account?
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
}

export default Signup;
