import React, { useEffect } from 'react';
import heroModel from './../../assets/hero-model.png';
import Aos from 'aos';
import "aos/dist/aos.css";

const MyComponent = () => {
  useEffect(() => {
    Aos.init({
        duration: 1000,
       
    });
  
}, []);

return <Hero />

}

function Hero() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center' style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("https://img.freepik.com/free-photo/psychedelic-paper-shapes-with-copy-space_23-2149378246.jpg?t=st=1739079302~exp=1739082902~hmac=7cea858d2804a129c3a374414c1e23edda6d5a2da1e79f204aa83494161afce1&w=1060")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      padding: '20px',
    }}>
      <div data-aos='fade-right' className='flex flex-col justify-center items-center md:items-start w-full md:w-1/2 md:mt-0 mt-8'>
        <h1  className='text-amber-50 text-5xl mt-20  mb-5 text-center md:text-left font-bold md:text-8xl '>FLAT <span className='text-amber-800'>30%</span>OF ON OUR EXCLUSIVE PRODUCTS</h1>
        <button className='bg-amber-700 hover:bg-amber-800 rounded-2xl p-3 text-amber-50 font-bold justify-center flex items-center' onClick={()=>document.getElementById('products').scrollIntoView({behavior:'smooth'})}>  EXPLORE</button>
      </div>
      <div className='flex justify-center md:justify-end w-full md:w-1/3 mt-5 md:mt-50 lg:mt-0'>
        <img data-aos='fade-up' src={heroModel} alt="Hero Model" className='max-w-full h-70 md:h-auto  md:mt-34 ' />
      </div>
    </div>
  );
}

export default MyComponent;