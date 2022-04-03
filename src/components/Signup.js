import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom'


const Signup = () => {
    const[Firstname,setFirstname]=useState('')
    const[Lastname,setLastname]=useState('')
    const[Email,SetEmail]=useState('')
    const[Password,SetPassword]=useState('')
    
    const navigate= useNavigate()
   

   

    const Signup= async(e)=>{
      e.preventDefault()
        try{
            const user = await createUserWithEmailAndPassword(auth,Email,Password)
            console.log(user)
            navigate('/login')
        }catch(error){
            alert(error.message)
        }
    }
  return (
    <div className='signup'>
    
    <div className='signup1'>
        <h2>Please SignUp !!</h2><br/><br/>
         <form onSubmit={(e)=>Signup(e)}>
            <input className='signup2'  type="text" placeholder='Firstname' onChange={(e)=>{setFirstname(e.target.value)}} required/> <br/><br/>
            <input className='signup2' type="text" placeholder='Lastname' onChange={(e)=>{setLastname(e.target.value)}} required/> <br/><br/>
            <input className='signup2' type="text" placeholder='Email' onChange={(e)=>{SetEmail(e.target.value)}} required/> <br/><br/>
            <input className='signup2' type="Password" placeholder='password' onChange={(e)=>{SetPassword(e.target.value)}} required/> <br/><br/>
            
            <button className='button' >SignUp</button>
            </form>
        
    </div>
    </div>
  )
}

export default Signup