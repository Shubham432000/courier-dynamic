import Navbar from './components/Navbar';
import './App.css';
import Signup from './components/Signup';
import React, { useEffect,useState } from 'react';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';


import { auth } from './firebase';

function App() {
  const [userName,setUserName]=useState('')

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName('')
      }
    })
  },[])
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
      
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route  path='/signup' element={<Signup/>}/>
         <Route  path='/login' element={<Login/>}/>
         <Route  path='/user' element={<User name={userName} />}/>
  
       </Routes>
       
      </BrowserRouter>
      
    </React.Fragment>

  )
  
  
}

export default App;
