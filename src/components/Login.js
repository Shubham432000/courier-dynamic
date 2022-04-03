import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import {auth} from '../firebase';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'



const Login = () => {

    const[Email,SetEmail]=useState('')
    const[Password,SetPassword]=useState('')

    const navigate= useNavigate()



    const Login=async(e)=>{
      e.preventDefault()
       try{
           const user= await signInWithEmailAndPassword( auth,Email,Password)
           console.log(user)
           navigate('/user')
       }catch(error){
           alert(error.message)
       }
    }
  return (
    <div className='login'>
    <div className='login1'>
        <h2>Please Login!!</h2><br/><br/>
        <form onSubmit={(e)=>Login(e)}>
        <input className='login2' type="text" placeholder='Email' onChange={(e)=>{SetEmail(e.target.value)}} required/> <br/><br/>
        <input className='login2' type="Password" placeholder='password' onChange={(e)=>{SetPassword(e.target.value)}} required/> <br/><br/>
        <button className='login3' >Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login