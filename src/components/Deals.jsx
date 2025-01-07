import React from 'react'

const Deals = () => {
  return (
    <div className='bg-gray-500 h-[300px] w-[100%]'>
      <h1 className='text-3xl font-bold ml-6'>Hot Deals</h1>
      <div className='flex gap-[40px] mt-4 ml-[20px]'>
        <img src="https://s3no.cashify.in/estore/d2866450bd5d4aec83dbf61277ab5e3f.webp?p=es4&s=es" alt="" className='w-[300px] h-[200px]' />
        <img src="https://s3no.cashify.in/estore/60a36c0f312c4cb88bb7612ad7e583e8.webp?p=es4&s=es" alt="" className='w-[300px] h-[200px]' />
        <img src="https://s3no.cashify.in/estore/8123d1f070bb49b6bc8bbae2dccbd4be.webp?p=es4&s=es" alt=""  className='w-[300px] h-[200px]'/>
        <img src="https://s3no.cashify.in/estore/4ea9f5e5bb2648a4ad05395b0b8e7e20.webp?p=es4&s=es" alt="" className='w-[300px] h-[200px]' />
      </div>
    </div>
  )
}

export default Deals
