import React, { useState } from 'react';
function Login(){
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");
    const [usererr,setUsererr]=useState(false);
    const [passerr,setPasserr]=useState(false);
    
    function loginH(e){
        if(email.length<3 ||password.length<3){
            alert("type correct")
        }else{
            alert("all good")
        }
        // alert("hello")
        e.preventDefault()
    }
   function Handler(e){
    let item=e.target.value
    if(item.length<3){
        setUsererr(true)
    }else{
        setUsererr(false)  
    }
    console.log(item);

   } 
   function PassHandler(e){
    let item=e.target.value
    if(item.length<3){
        setPasserr(true)
    }else{
        setPasserr(false)  
    }
    console.log(item);
   } 
    
    

    
    return(
        <>
        <h1>Login Form</h1>
        <form  onSubmit={loginH}>

        Email:<input type='text' name='email' onChange={Handler}/>{usererr?<span>user not</span>:""}
        Password:<input type='password' name='password' onChange={PassHandler} />{passerr?<span>password not</span>:""}
        <button type='submit'>Singin</button>
        </form>
        </>
    )

}
export default Login;

