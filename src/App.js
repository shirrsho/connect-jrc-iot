import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
