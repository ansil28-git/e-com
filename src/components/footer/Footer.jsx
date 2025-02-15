import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";




function Footer() {
  return (
    <div className='bg-amber-600 container mx-auto my-auto p-6  justify-between mt-8 w-full flex flex-col sm:flex-row'>
      <div className='text-gray-200 mb-4 sm:mb-0 '>
         <h3 className=' font-bold'>Coustemer Suppport</h3>
         <h6 className='text-xs'>TeesStudio@88support.com</h6>
         <div className='flex flex-row gap-2 '>
         <FaTwitter className='transition duration-300 hover:scale-130 shadow-amber-400 shadow-2xs ' />
         <FaFacebookSquare  className='transition duration-300 hover:scale-130 shadow-amber-400 shadow-2xs '/>
         </div>
      </div>
      <div className='text-gray-200 '>
        <h3 className='font-bold'>Address</h3>
        <p className='text-sm'>fx-floor,Ng Nagar,Bengaluru</p>

      </div>
    </div>
  )
}

export default Footer
