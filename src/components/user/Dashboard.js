import React, { useEffect, useState } from 'react'
import { logout } from '../database/auth_database_firebase';
import { auth } from '../database/auth_database_firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [userstate,setUserstate] = useState(true)
  
  function add_device(){
    // logout()
    // navigate('/login');
  }

  function logsout(){
    if(logout()) setUserstate(!userstate)
    // navigate('/login');
  }
  useEffect(() => {
        if (loading) {
          load()
        }
        else if (!user) navigate('/login')
    }, [user,loading,userstate]);

  const load = () => {
      return <div><h1>MARAKHAO Dashboard</h1></div>;
  }

  return (
        <div>
          <button className='bg-black px-6 text-white text-xl hover:bg-amber-500 py-2 rounded-3xl' onClick={logsout}>Log Out</button>
          <button className='bg-black px-6 text-white text-xl hover:bg-amber-500 py-2 rounded-3xl' onClick={add_device}>Add Device</button>
        </div>
  );
}

export default Dashboard;