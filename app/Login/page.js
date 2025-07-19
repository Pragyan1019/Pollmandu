"use client"
import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [form, setform] = useState({name:"",email:"",password:""})
        const saveform= async(e)=>{
             e.preventDefault(); 
        const res=await fetch('api/user',{
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
        const data=res.json;
        console.log(data)
        }
        const handlechange=(e)=>{
            setform({...form,[e.target.name]:e.target.value})
        }
    
  return (
   <form onSubmit={saveform}>
<label htmlFor="name">Name</label>
<input type="text" name='name' id='name' value={form.name} onChange={handlechange} />
<label htmlFor="email">Email</label>
<input type="text" name='email' id='email' value={form.email} onChange={handlechange}/>
<label htmlFor="password">Password</label>
<input type="text" name='password' id='password' value={form.password} onChange={handlechange}/>
<button>Submit</button>
</form>
  )
}

export default Login
