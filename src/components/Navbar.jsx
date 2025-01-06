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
    <div className='flex mt-6 '>
      <img src={logo}  className="ml-5 w-40 h-14 mb-6" alt="" />
      <div className='flex h-12 ml-4 border border-gray-100 bg-gray-200'>
        <img src={lens} />
        <input  placeholder='Search for mobiles' className='ml-4 w-[900px] bg-gray-200'/>
      </div>
       <div className='flex h-12 p-3 ml-6  cursor-pointer'>
        <img src={location} className='w-6 h-5 mt-1' alt="" />
        <h1 className='text-bold'>Mumbai</h1>
        <img src={arrow} className='w-8 h-7 ' />
       </div>
       <button onClick={()=>setLoginPop(!loginPop)}  className="  ml-5 bg-green-700 w-40 h-10 rounded-md">Login</button>

    
    </div>
    
    {loginPop && <Login/>}
    
    </>
  )
}

export default Navbar
