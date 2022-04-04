import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Signin from './components/SignIn';

function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Signin/>} />
       <Route path='/home' element={<Home/>} />
     </Routes>
   </Router>
  );
}

export default App;
