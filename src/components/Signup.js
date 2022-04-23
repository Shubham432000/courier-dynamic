import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom'
import { db } from '../firebase';
import {addDoc, collection} from "firebase/firestore"
import { updateProfile } from 'firebase/auth';

import InputControl from './InputControl';

const Signup = () => {
    const[Firstname,setFirstname]=useState('')
    const[Lastname,setLastname]=useState('')
    const[Email,SetEmail]=useState('')
    const[Password,SetPassword]=useState('')
    
    
    const navigate= useNavigate()
    const usersCollectionRef=collection(db,"users")

    

    const signup= async(e)=>{
     


      e.preventDefault()
      await addDoc(usersCollectionRef, {Firstname,Lastname})
     
      createUserWithEmailAndPassword(auth,Email,Password)
      .then(async(res)=>{
       
      const user=res.user;
      await updateProfile(user,{
        displayName:Firstname,Lastname
      })
      navigate('/login')
    })
     
      .catch((err)=>{
      
        alert(err.message);
      })
    }
  return (
    <div className='signup'>
    
    <div className='signup1'>
        <h2>Please SignUp !!</h2><br/><br/>
         <form >
            <InputControl className='signup2'  type="text" placeholder='Firstname' onChange={(e)=>{setFirstname(e.target.value)}} required/> <br/><br/>
            <InputControl className='signup2' type="text" placeholder='Lastname' onChange={(e)=>{setLastname(e.target.value)}} required/> <br/><br/>
            <InputControl className='signup2' type="text" placeholder='Email' onChange={(e)=>{SetEmail(e.target.value)}} required/> <br/><br/>
            <InputControl className='signup2' type="password" placeholder='Password' onChange={(e)=>{SetPassword(e.target.value)}} required/> <br/><br/>
            
            <button className='button' onClick={signup} >SignUp</button>
            </form>
        
    </div>
    </div>
  )
}

export default Signup