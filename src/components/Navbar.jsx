import React, { useState } from 'react'
import logo from '../images/logo.png'
import lens from '../images/lens.png'
import arrow from '../images/downward-arrow.png'
import location from '../images/location.png'
import Login from './Login'


const Navbar = () => {

    const [loginPop,setLoginPop] = useState(false);

    
   
  return (
    
    <>
    <div className='flex mt-7 '>
      <img src={logo}  className=" w-40 h-14 mb-6" alt="" />
      <div className='flex h-12 border border-gray-100 bg-gray-200'>
        <img src={lens} />
        <input  placeholder='Search for mobiles' className=' w-[900px] bg-gray-200'/>
      </div>
       <div className='flex h-12 p-3 ml-1  cursor-pointer'>
        <img src={location} className='w-6 h-5 mt-1' alt="" />
        <h1 className='text-bold text-sm mt-1'>Mumbai</h1>
        <img src={arrow} className='w-8 h-7 ' />
       </div>
       <button onClick={()=>setLoginPop(!loginPop)}  className=" mt-2 ml-6 bg-green-700 h-[30px] w-20 rounded-lg text-[10px]">Login</button>

    
       </div>
     
    {loginPop && <Login/>}
    </> 
    
  )
}

export default Navbar
