import React from 'react'
import { Nunito } from "next/font/google"; 
const mons = Nunito({
  subsets: ["latin"],
  // You can also specify weights directly
});
const Navbar = () => {
  return (
    <div className='flex flex-row px-10 py-2 justify-between items-center bg-[#3f75794f] backdrop-blur-3xl rounded-2xl  text-white  w-[100%]  absolute mx-auto '>
      <div className={`${mons.className} text-3xl`}>Pollmandu</div>
      <div>
        <ul className='flex gap-10 text-xl'>
            <li className='hover:cursor-pointer  py-2 px-3 rounded-3xl hover:bg-[#85a9ac4f] transition-all ease-linear duration-400'>Home</li>
            <li className='hover:cursor-pointer py-2 px-3 rounded-3xl hover:bg-[#85a9ac4f] transition-all ease-linear duration-400'>Start a session</li>
            <li className='hover:cursor-pointer py-2 px-3 rounded-3xl hover:bg-[#85a9ac4f] transition-all ease-linear duration-400'>Join a session</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
