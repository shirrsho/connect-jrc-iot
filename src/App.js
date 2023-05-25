import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from "./components/dashboard/Dashboard";
import DeviceView from "./components/device_management/DeviceView";
import HomePage from "./components/homepage/HomePage";
import Dashboard1 from "./components/dashboard/Dashboard"
import Documentation from "./components/documentation/Documentation";
import EmailVerification from "./components/authentication/EmailVerification";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/device/:id" element={<DeviceView/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/dashboard1" element={<Dashboard1/>}/>
          <Route path="/documentation" element={<Documentation/>}/>
          <Route path="/verification" element={<EmailVerification/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
