import React from 'react'

const Service = () => {
  return (
    <>
    <div className='ml-8'>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-8">How Cashify Work</h1>
    </div>
    <div className="  bg-gray-50 h-[400px] w-full  flex flex-row gap-[40px]">
    
    <div className='flex flex-col ml-[100px]  border w-[300px] h-[200px] '>
       <img src="https://s3no.cashify.in/estore/0cbe53723c3f453b9129991ca35df5f0.png?p=default&s=lg" alt="" className='w-[200px] h-[200px] ml-9'/> 
       <h1 className='font-extrabold text-black'>1. Check Price</h1>
       <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
      
    </div>

    <div className='flex flex-col ml-[40px] border w-[300px] h-[200px]'>
       <img src="https://s3no.cashify.in/estore/11c121e3650747689b22301209b725a4.png?p=default&s=lg" alt="" className='w-[200px] h-[200px] ml-9'/> 
       <h1 className='font-extrabold text-black'>2. Schedule Pickup</h1>
       <p>Book a free pickup from your home or work at a time slot that best suits your convenience.</p>
      
    </div>

    <div className='flex flex-col ml-[40px] border-spacing-1 w-[300px] h-[200px]'>
       <img src="https://s3no.cashify.in/estore/b9d74e87eedd4de3b47531e13a033fb2.png?p=default&s=lg" alt="" className='w-[200px] h-[200px] ml-9'/> 
       <h1 className='font-extrabold text-black'>3. Get Paid </h1>
       <p>Did we mention you get paid as soon as our executive picks up your device? It\'s instant payment all the way!</p>
      
    </div>
  </div>
  </>
  )
}

export default Service
