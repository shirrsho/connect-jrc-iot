import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from "./components/user/Dashboard";
import DeviceView from "./components/device_management/DeviceView";
import HomePage from "./components/revised_component/homepage/HomePage";
import Dashboard1 from "./components/revised_component/dashboard/Dashboard"
import DevView from "./components/revised_component/deviceview/DevView";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/device/:id" element={<DeviceView/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/dashboard1" element={<Dashboard1/>}/>
          <Route path="/devView" element={<DevView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
