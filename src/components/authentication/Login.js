import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    
    function login(event){
        event.preventDefaults();
        if(logInWithEmailAndPassword(email, password)) console.log("logged in");
    }

    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) console.log("dashboard");
    }, [user, loading]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="w-1/3 p-6 bg-white rounded-lg shadow-xl ">
            <div className="flex flex-col items-center">
            <img
                src="/Images/icon.png"
                alt="icon"
                className="w-16 h-12 object-cover  mt-10"
            />
         
            </div>
            <form className="flex flex-col mt-8">
            {/* <input
                type="text"
                placeholder="Enter your username"
                className="p-2 border border-gray-400 rounded-lg mt-4"
            /> */}
            <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-400 rounded-lg mt-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="p-2 border border-gray-400 rounded-lg mt-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-indigo-500 text-white p-2 rounded-lg mt-6 hover:bg-indigo-600" type="submit"
                    onClick={()=>login()}>
                Login
            </button>
            </form>
        </div>
        </div>
    );
    };

    export default Login;
