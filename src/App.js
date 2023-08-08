import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import Userdetails from "./components/userdetails";
import Resetpass from "./components/Reset";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route
            path="/login"
            element={isLoggedin === "true" ? <Userdetails /> : <LoginPage />}
          />
          <Route path="/userdetails" element={<Userdetails />} />
          <Route path="/Reset" element={<Resetpass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
