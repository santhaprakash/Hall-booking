import React, { useEffect } from 'react'
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { signInWithPopup} from "firebase/auth";
import {db} from "../firebase"
function Login() {
  const useruid=localStorage.getItem('currentuser')
    const handleSignin=async()=>{  
        const auth=getAuth();
        const provider =new GoogleAuthProvider();
        try{
          const res=await signInWithPopup(auth,provider); 
            console.log(res);      
            window.location.href='/'
        localStorage.setItem('currentuser',res.user.uid);
        localStorage.setItem('userimage',res.user.photoURL);
        localStorage.setItem('username',res.user.displayName)  
        }
        catch(e){
    console.log(e);
      }
        }
  return (
  <>
  {
    useruid?window.location.href='/':
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column',marginTop:'100px'}}>
    <h2>User</h2>
  <button  onClick={handleSignin}
   style={{color:'black',borderRadius:'10px',border:'0.5 solid black'
   ,padding:'10px 20px 10px 20px',boxSizing:'border-box',cursor:'pointer'}}>Sign in with google</button>
    </div>
  }
  </>
   
  )
}

export default Login;