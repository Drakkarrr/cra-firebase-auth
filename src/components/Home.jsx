import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
      signOut(auth)
      .then(() => {
        navigate('/');
        console.log('signed out!');
      })
      .catch((err) => {
          console.log(err);
      }



      );
  }
  return (
    <div>
      <h1>Hello Homepage!</h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home