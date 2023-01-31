    import React from 'react';

    const Login = () => {
        const icon="logo192.png"
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 ">
        <div className="w-[25%] m-4 p-6 bg-white rounded-xl shadow-xl relative ">
            <div className="flex flex-col items-center">
            <img
                src="/Images/icon.png"
                alt="icon"
                className="w-16 h-12 object-cover  mt-10"
            />
        
            </div>
            <form className="flex flex-col mt-8 mb-8 items-center">
            <input
                type="text"
                placeholder="Enter your username"
                className="p-2 border-b border-gray-400 rounded-lg mt-4 text-center"
            />
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
                className="bg-black text-white py-2 px-6 text-xl rounded-2xl mt-10 hover:bg-indigo-600  "
                type="submit"
            >
                Register
            </button>
            </form>
        </div>
        </div>
    );
    };

    export default Login;
