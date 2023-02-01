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
    navigate('/login');
  }
  useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (!user) navigate('/login')
    }, [user, loading]);

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