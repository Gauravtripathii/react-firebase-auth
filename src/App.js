import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
