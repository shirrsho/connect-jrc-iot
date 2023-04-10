import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from "./components/dashboard/Dashboard";
import DeviceView from "./components/device_management/DeviceView";
import HomePage from "./components/homepage/homepage/HomePage";
import Dashboard1 from "./components/dashboard/Dashboard"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/device/:id" element={<DeviceView/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/dashboard1" element={<Dashboard1/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
