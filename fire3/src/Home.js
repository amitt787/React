import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './Firebase';


const Home = () => {
    const [user,loading,error]=useAuthState(auth);
  return (
    <>
   <div>Home welcme{user?.email}</div> 
   <div>
    <button onClick={()=>auth.signOut()}>singnOut</button>
   </div>
    
    
    </>

  )
}

export default Home