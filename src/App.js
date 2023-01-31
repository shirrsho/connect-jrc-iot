import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
