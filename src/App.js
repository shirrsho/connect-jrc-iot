import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from "./components/user/Dashboard";
import DeviceView from "./components/device_management/DeviceView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/deviceview/:id" element={<DeviceView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
