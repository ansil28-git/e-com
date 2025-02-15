import React from 'react';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Productdata from "./../../assets/Data.jsx";
import Aos from 'aos';
import { useEffect } from 'react';
const MyComponent = ({ addToCart }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return <Products addToCart={addToCart} />;
}



function Products({ addToCart}) {
  return (
    <div className='container mx-auto p-4 mt-7 overflow-x-hidden'>
      <h1 className='text-center text-4xl font-bold text-gray-100 bg-gradient-to-b from-red-400 to-red-500 rounded-3xl shadow-lg tracking-wide'>OUR EXCLUSIVE PRODUCTS</h1>
      <div data-aos='zoom-out' className='flex flex-wrap justify-center items-center text-center mt-15 gap-7'>
        {Productdata.map((data, index) => (
          <div key={data.id} className='rounded-3xl shadow-xl p-5 bg-yellow-50 w-2/3 sm:w-60 md:w-72'>
            <img className='object-cover transition duration-300 hover:scale-105 mb-2 w-full h-48' src={data.image} alt={data.name} />
            <h1 className='font-bold text-amber-700 mb-3'>{data.name}</h1>
            <h5 className='font-bold text-amber-400'>RATING : {'★'.repeat(data.rating)}</h5>
            <h3 className='font-bold'>PRICE:<span className='font-extrabold text-amber-700 ml-2'>{data.price}/-</span></h3>
            <div className='flex items-center justify-center'>
              <button onClick={()=>addToCart(data)} className='bg-orange-400 text-amber-50 p-3 cursor-pointer font-bold rounded-2xl hover:bg-amber-600 mb-4 mt-1 text-sm flex justify-center'>
                ADD TO CART <MdOutlineShoppingCartCheckout className='ml-2 text-lg' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;