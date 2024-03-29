import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom"

import { auth } from '../database/auth_database_firebase'
import { registerWithEmailAndPassword } from '../database/auth_database_firebase';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    async function register(event) {
        if (!name) alert("Please enter name");
        else{
            try {
                await registerWithEmailAndPassword(name, email, password)
                navigate('/verification')
            } catch (error) {
                alert(error.message);
            }
            event.preventDefault()
        }
    };



    useEffect(() => {
        if (loading) return;
        else if (user){
            if(user.emailVerified) navigate('/')
        }
        if(error){}
    }, [user, loading, error]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 ">
            <div className="w-2/3 lg:w-[25%] m-4 p-6 bg-white rounded-xl shadow-2xl relative">
                <div className="flex flex-col items-center">
                    <img
                        src="/Images/icon/reg.png"
                        alt="icon"
                        className="w-16 h-16 object-cover  mt-10"
                    />

                </div>
                <div className="flex flex-col mt-4 mb-12 items-center">


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
                        className="p-2 border-b border-gray-400 rounded-lg mt-4 text-center"
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
                        onClick={(event) => register(event)}
                    >
                        Register
                    </button>
                    <Link className='text-xl absolute bottom-0 translate-y-[80px] hover:shadow-sm hover:cursor-pointer hover:text-2xl ' to="/login">LOGIN</Link>
                </div>

            </div>

        </div>
    );
};

export default Register;
