import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { PiPackageFill } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import Aos from 'aos';
import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return <Whyus />;
};

function Whyus() {
  return (
    <div className='container mx-auto p-6 mt-5 overflow-x-hidden'>
      <h1 className='font-black text-center md:text-4xl text-3xl mb-11'>
        WHY <span className='text-amber-600'>US</span>
      </h1>
      <div data-aos='zoom-out' className='bg-gray-300 w-full max-w-lg mx-auto rounded-lg shadow-lg flex flex-col justify-center items-center p-6'>
        <div className='flex flex-col items-center text-center'>
          <TbTruckDelivery className='text-5xl mb-2' />
          <h3 className='font-bold text-lg md:text-xl mb-4'>Fast Delivery</h3>
          <PiPackageFill className='text-5xl mb-2' />
          <h3 className='font-bold text-lg md:text-xl mb-4'>Secure Package</h3>
          <TbTruckReturn className='text-5xl mb-2' />
          <h3 className='font-bold text-lg md:text-xl'>Easy Return</h3>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;