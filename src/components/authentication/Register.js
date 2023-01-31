import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom"

import {
  auth,
  registerWithEmailAndPassword,
} from "./firebase";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    function register(event){
        if (!name) alert("Please enter name");
        if(registerWithEmailAndPassword(name, email, password)) navigate('/dashboard');
    };
    
    useEffect(() => {
      if (loading) return;
      if (user) console.log("already in");
    }, [user, loading]);

return (
    <div className="flex items-center justify-center h-screen bg-gray-200 ">
    <div className="w-[25%] m-4 p-6 bg-white rounded-xl shadow-2xl relative ">
        <div className="flex flex-col items-center">
        <img
            src="/Images/icon/reg.png"
            alt="icon"
            className="w-16 h-12 object-cover  mt-10"
        />
     
        </div>
        <form className="flex flex-col mt-4 mb-12 items-center">
        
    
        <input
        type="text"
        placeholder="Enter your username"
        className="p-2 border-b border-gray-400 rounded-lg mt-4 text-center"
        value={name}
            onChange={(e) => setName(e.target.value)}
        />
   
        <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border-b border-gray-400 rounded-lg mt-8 text-center"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Enter your password"
            className="p-2 border-b border-gray-400 rounded-lg mt-8 text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button
            className="bg-black text-white py-2 px-6 text-xl rounded-3xl mt-10 hover:bg-indigo-600 absolute bottom-0 translate-y-1/2"
            type="submit"
            onClick={()=>register()}
        >
            Register
        </button>
        </form>
        
    </div>
    
    </div>
);
};

export default Register;
