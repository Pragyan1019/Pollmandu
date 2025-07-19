import React from 'react'


const Dashboard = () => {
  return (
  <div className='bg-[#111b1c] min-h-[100vh] text-white items-start flex flex-col justify-center'>
      <div className='w-[80%] mx-auto flex flex-col'>
        
       <span className='text-2xl'>A place to interact with the help of presentations.</span>  
      
      </div>
       <div className="buttons flex gap-7 p-10 w-[80%] mx-auto">
        
        <button className='border-2 border-teal-900 px-4 py-2 rounded-2xl  hover:cursor-pointer hover:-translate-y-1 transition-all ease-in-out shadow-inner shadow-amber-300 duration-500'>Create a contest</button>
        <button className='border-2 border-teal-900 px-4 py-2 rounded-2xl  hover:cursor-pointer hover:-translate-y-1 transition-all ease-in-out shadow-inner shadow-indigo-400 duration-500'>Join a contest</button>
        </div>
    </div> 
  )
}

export default Dashboard
