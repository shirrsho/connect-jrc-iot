import React, { useEffect } from 'react';
import { auth } from '../database/auth_database_firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, sendEmailVerification } from 'firebase/auth';

function EmailVerification() {
  const user = getAuth().currentUser
  async function fetchData() {
    await sendEmailVerification(user)
    .then(() => {
    console.log('Verification email sent.');
    })
    .catch((error) => {
    console.error('Error sending verification email:', error);
    });
    }
    fetchData();

  return (
    <div style={{"paddingLeft":"500px","paddingTop":"300px"}}>
      <p>Please check your email to verify your address.<br/>If not found, check the spam folder.</p>
    </div>
  );
}

export default EmailVerification;
