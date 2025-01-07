import React from 'react';
import { FaArrowCircleRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa'; 

const Stores = () => {
  return (
    <>
    <h1 className='font-bold text-2xl'>Our Exclusive Stores</h1>
   
       
      <div className="flex items-center justify-between mb-8 mt-2">
        
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-2xl text-green-500" />
          <span className="text-lg font-semibold">200+ Companies</span>
        </div>

    
        <div className="flex items-center mr-[1000px]">
          <FaStar className="text-yellow-500" />
          <span className="text-lg font-semibold">4.5+ Ratings</span>
        </div>
      </div>
     
      <div className="flex items-center mb-8">
      <input  placeholder=' Enter Pincode' className='ml-4 w-[300px] h-[40px] bg-gray-200 rounded-l-lg'/>
        <button className="bg-gray-200 h-[40px] mr-3 p-3 rounded-r-lg text-black ">
          <FaArrowCircleRight className="text-xl" />
        </button>
      </div>

     
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
          <button className='border bg-black text-white rounded-md w-[100px]'>Mumbai</button>
          <h1 className='font-bold mt-2'>Cashify Buy, Sell and Repair Mobile Store Mahim Mumbai</h1>
          <p className='text-gray-500 text-sm mt-2'>Shop No 2, Ground Floor, Plot 102, Laher Mansion,lady Jamshedji Road, Sitaladevi,..</p>
          < p className='text-gray-500 text-sm mt-1'>Timings : 10:30 AM - 09:00 PM</p>
          <p className='text-green-600 mt-2'>View Details</p>
           
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
          <button className='border bg-black text-white rounded-md w-[100px]'>Mumbai</button>
          <h1 className='font-bold mt-2'>Cashify Buy, Sell and Repair Mobile Store Ghatkopar Mumbai</h1>
          <p className='text-sm text-gray-500 mt-2'>Shop No.5, Ground floor Nalanda SRA Co.Operative Society Damji Compound C.T.S.,...</p>
          <p className='text-sm text-gray-500 mt-1'>Timings : 11:00 AM - 09:30 PM</p>
          <p className='text-green-600 mt-2'>View Details</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <button className='border bg-black text-white rounded-md w-[100px]'>Mumbai</button>
          <h1 className='font-bold mt-2'>Cashify Buy, Sell and Repair Mobile Store Vashi Navi Mumbai</h1>
          <p className='text-sm text-gray-500 mt-2'>G-22, BSEL Tech Park, Plot no -39/5 & 39/5A, Sector 30A Opposite Vashi Railway Station,...</p>
          <p className='text-sm text-gray-500 mt-1'>Timings : 11:00 AM - 09:30 PM</p>
          <p className='text-green-600 mt-2'>View Details</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <button className='border bg-black text-white rounded-md w-[100px]'>Mumbai</button>
          <h1 className='font-bold mt-2'>Cashify Buy, Sell and Repair Mobile Store Kamothe Mumbai</h1>
          <p className='text-sm text-gray-500 mt-1'>SHOP NO. -04 GROUND FLOOR, RADHESHYAM COMPLEX PREMISES CO SO LTD, BUILDING N...</p>
          <p className='text-sm text-gray-500 mt-2'>Timings : 11:00 AM - 09:30 PM</p>
          <p className='text-green-600 mt-2'>View Details</p>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Stores;
