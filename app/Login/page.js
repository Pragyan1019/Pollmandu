"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router =useRouter();
    const [form, setform] = useState({name:"",email:"",password:""})
        const saveform= async(e)=>{
             e.preventDefault(); 
        const res=await fetch('/api/user',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({...form})
        }
     )
     if(!res.ok){
    console.log("server couldnot respond") 
    }
        const data=await res.json();
        console.log(data);
          if(res.status==409){
           alert("User already exists. Please log in instead.");
    router.push('/login'); // go to login page
    return;
        }
        //getting token and storing it to local storage
      else if(data.token && res.ok){
            localStorage.setItem('token',data.token);
            alert(`User already exists`)
            router.push('/');
            return;
        }
       
        
        console.log("userid:",data.user.id)
        }
        const handlechange=(e)=>{
            setform({...form,[e.target.name]:e.target.value})
        }
    
  return (
   <form onSubmit={saveform}>
<label htmlFor="name">Name</label>
<input type="text" name='name' id='name' value={form.name} onChange={handlechange} />
<label htmlFor="email">Email</label>
<input type="email" name='email' id='email' value={form.email} onChange={handlechange}/>
<label htmlFor="password">Password</label>
<input type="password" name='password' id='password' value={form.password} onChange={handlechange}/>
<button>Submit</button>
</form>
  )
}

export default Login
