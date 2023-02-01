import React, { useEffect } from 'react'
import { logout } from '../authentication/firebase';
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  console.log(loading);
  console.log(error);
  

  function logsout(){
    logout()
    // navigate('/login');
  }
  useEffect(() => {
        if (loading) {
          load()
        }
        else if (!user) navigate('/login')
    }, [user,loading]);

  const load = () => {
      return <div><h1>MARAKHAO Dashboard</h1></div>;
  }

  return (
    <div>
      {user &&
        <div>
          <button className='bg-black px-6 text-white text-xl hover:bg-amber-500 py-2 rounded-3xl' onClick={logsout}>Log Out</button>
        </div>
      }
    </div>
  );
}

export default Dashboard;