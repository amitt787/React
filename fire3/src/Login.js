import React, { useState } from 'react'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './Firebase';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // const navigate
    const signIN=(e)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>console.log(auth))
        .catch(error =>console.log(error))

    }
    const register=(e)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>console.log(auth))
        .catch(error =>console.log(error))
    
    }

  return (
    <>
        <h1>singn in form</h1>
        Email:<input type="text"  onChange={(e)=>{setEmail(e.target.value)}}></input>
        password:<input type="text" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={signIN}>singn</button>
        <p>if you want to singh</p>
        <button onClick={register}>Register</button>




    </>
  )
}

export default Login