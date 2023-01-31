    import React from 'react';
import { Link } from 'react-router-dom';

    const Login = () => {
        const icon="logo192.png"
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 ">
        <div className="w-2/3 lg:w-[25%] m-4 p-6 bg-white rounded-xl shadow-2xl relative ">
            <div className="flex flex-col items-center">
            <img
                src="/Images/icon/sign.png"
                alt="icon"
                className="w-16 h-16 object-cover  mt-10"
            />
        
            </div>
            <form className="flex flex-col mt-4 mb-12 items-center">
           {/*  <input
                type="text"
                placeholder="Enter your username"
                className="p-2 border-b border-gray-400 rounded-lg mt-4 text-center"
            />*/}
            <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border-b border-gray-400 rounded-lg mt-8 text-center"
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="p-2 border-b border-gray-400 rounded-lg mt-8 text-center"
            />
            <button
                className="bg-black text-white py-2 px-6 text-xl  rounded-3xl mt-10 hover:bg-indigo-600 absolute bottom-0 translate-y-1/2 "
                type="submit"
            >
                Login
            </button>
            <Link className='text-xl absolute bottom-0 translate-y-[80px] hover:shadow-sm hover:cursor-pointer hover:text-2xl ' to="/register">REGISTER</Link>
            </form>
         
        </div>
        </div>
    );
    };

    export default Login;
