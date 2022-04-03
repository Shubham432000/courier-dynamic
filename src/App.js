import Navbar from './components/Navbar';
import './App.css';
import Signup from './components/Signup';
import React from 'react';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/user' element={<User/>}/>
         <Route exact path='/signup' element={<Signup/>}/>
         <Route exact path='/login' element={<Login/>}/>
  
       </Routes>
      </BrowserRouter>
      
    </React.Fragment>

  )
  
  
}

export default App;
