import React, { useState, useEffect } from 'react';
import { authentication } from '../firebase.config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate('/');
   }
  },[navigate])

  useEffect(() => {
    console.log(user);
   
  },[user])

    const handleSignIn = () => {
      const provider = new GoogleAuthProvider();
       signInWithPopup(authentication, provider)
       .then((res) => {
        setUser(res.user);
        localStorage.setItem("token", res.user);
          navigate('/home');
       })
       .catch((err) => {
        console.log(err);
       })
    }

  return (
    <button onClick={handleSignIn}>Sign in</button>
  )
}

export default SignIn