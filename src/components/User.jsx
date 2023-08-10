import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { firebaseAuth } from "../firebase-config";

function User() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/login");
  });

  return (
    <div>
      <h1>Welcome, {user?.email}!</h1>
      <button onClick={() => signOut(firebaseAuth)}>SignOut</button>
    </div>
  );
}

export default User;
