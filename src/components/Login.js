import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import {auth} from '../firebase';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'

import InputControl from './InputControl';



const Login = () => {

    const[Email,SetEmail]=useState('')
    const[Password,SetPassword]=useState('')
    

    const navigate= useNavigate()



    const login=async(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,Email,Password)
      .then(async()=>{

        navigate('/user')
      })
      .catch((error)=>{
        alert(error.message)
      })
       
    }
  return (
    <div className='login'>
    <div className='login1'>
        <h2>Please Login!!</h2><br/><br/>
        <form >
        <InputControl className='signup2' type="text" placeholder='Email' onChange={(e)=>{SetEmail(e.target.value)}} required/> <br/><br/>
        <InputControl className='signup2' type="password" placeholder='Password' onChange={(e)=>{SetPassword(e.target.value)}} required/> <br/><br/>
        <button className='login3' onClick={login}>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login