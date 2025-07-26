'use client';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';


const Dashboard = () => {
  const router=useRouter()
  const logout=()=>{
     localStorage.removeItem('token')
router.push('/Login')
  }
  const [User, setUser] = useState(null)
  useEffect(() => {
    const verifyUser=async()=>{
      
      const token=localStorage.getItem('token')
      if(!token){
router.push('/Login')
return;
      }

const res=await fetch('api/auth/verify',{
  method:'GET',
headers:{
  'Authorization':`Bearer ${token}` //bearer <token>
}})
const data=await res.json();
if(res.ok){
  setUser(data.user)
  console.log(data)
}    
else{
  localStorage.removeItem('token')
router.push('/login')
}
    }
    verifyUser();
  }, [])
  
  return (
  <div className='bg-[#111b1c] min-h-[100vh] text-white items-start flex flex-col justify-center'>
      <div className='w-[80%] mx-auto flex flex-col'>
        
       <span className='text-2xl'>A place to interact with the help of presentations.</span>  
      </div>
       <div className="buttons flex gap-7 p-10 w-[80%] mx-auto">
        
        <button className='border-2 border-teal-900 px-4 py-2 rounded-2xl  hover:cursor-pointer hover:-translate-y-1 transition-all ease-in-out shadow-inner shadow-amber-300 duration-500'>Create a contest</button>
        <button className='border-2 border-teal-900 px-4 py-2 rounded-2xl  hover:cursor-pointer hover:-translate-y-1 transition-all ease-in-out shadow-inner shadow-indigo-400 duration-500'>Join a contest</button>
        <button onClick={logout} className='border-2 border-red-700 px-4 py-2 rounded-2xl hover:cursor-pointer hover:-translate-y-1 transition-all ease-in-out shadow-inner shadow-red-300 duration-500'>Log out</button>
        </div>
    </div> 
  )
}

export default Dashboard
