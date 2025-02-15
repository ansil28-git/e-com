import React, { useState } from 'react';
import logo from './../../assets/logo.png'; 
import { BsFillCartFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { TbMoodEmpty } from "react-icons/tb";
function Navbar({cart,removeItem}) {

  const [show,setShow] =useState(false)
  const [showCart, setShowCart] = useState(false);

  const changestate =()=>{
   setShow(!show)

  }
  const Closenav = () =>{
     setShow(false);

  };
  const toggleCart = () => {
    setShowCart(!showCart); 
  };
  
  
  return (
    <div className='bg-amber-600  shadow-lg flex items-center h-16 p-2 fixed top-0 right-0 left-0 z-20 '>
      <div className='flex items-center justify-between w-full'> 
        <div className='w-40 h-auto'>
          <img className='w-full h-auto hover:scale-105' src={logo} alt="Logo" />
        </div>
        <div className=' items-center flex justify-end space-x-2 '>
        <ul className='hidden md:flex flex-row space-x-4 mr-5'>
            <li><a className='text-white font-bold text-sm transition duration-300 hover:text-amber-300' href="#home">HOME</a></li>
            <li><a className='text-white font-bold  text-sm transition duration-300 hover:text-amber-300'href="#products">PRODUCTS</a></li>
            <li><a className='text-white font-bold text-sm  transition duration-300 hover:text-amber-300'href="#features">WHY US</a></li>
            <li><a className='text-white font-bold text-sm  transition duration-300 hover:text-amber-300'href="#reviews">REVIEWS</a></li>
        </ul>
        <div>
        <span className='text-white mr-4 transition duration-300 hover:scale-120 n flex justify-center cursor-pointer' onClick={toggleCart}><BsFillCartFill /> {cart.length > 0 &&(<span className='ml-1 text-sm relative bottom-3'> {cart.length}</span>)}   </span>
        </div>
        
        <buttton className='bg-amber-400 p-1 mr-6 md:mr-1 text-amber-50 font-bold rounded-3xl text-sm cursor-pointer hover:bg-amber-600'>LOGIN</buttton>
        <div onClick={changestate}className='text-white md:hidden mr-2 text-2xl' >{show ? <IoIosCloseCircle/> : <FaBarsStaggered /> }</div>
        
        </div>
      </div>

      { show && (
     <div className={`fixed top-0 left-0 h-60 md:hidden bg-amber-600 mt-16 flex items-center transition-transform duration-600 ease-in-out transform ${show ? 'translate-x-0' : '-translate-x-full'} w-full`}>
      <ul className='flex md:hidden flex-col space-x-4 space-y-3 mr-5 justify-centers ml-4 '>
            <li><a className='text-white font-extrabold text-sm transition duration-300 hover:text-cyan-200' href="#home" onClick={Closenav}>HOME </a></li>
            <li><a className='text-white font-extrabold  text-sm transition duration-300 hover:text-cyan-200'href="#products" onClick={Closenav} >PRODUCTS</a></li>
            <li><a className='text-white font-extrabold text-sm  transition duration-300 hover:text-cyan-200'href="#features" onClick={Closenav}>WHY US</a></li>
            <li><a className='text-white font-extrabold text-sm  transition duration-300 hover:text-cyan-200'href="#reviews" onClick={Closenav}>REVIEWS</a></li>
        </ul>
      </div>
    )} 

    {showCart && (
      <div className='bg-amber-50 shadow-2xl  fixed top-16 right-0 w-64 h-auto'>
        <h1 className='font-bold ml-2 mt-3 text-xl '>Cart</h1>
        {cart.length ===0 ?(
         <p className='font-bold text-center font-serif flex justify-center'> Your Cart Is Empty <TbMoodEmpty className='text-2xl ml-2 text-amber-600' /> </p>
        ):(
          <ul>
            {cart.map((item,index)=>(
                <li key={item.id} className='p-4 border-b-2 mt-2 mb-2 flex justify-between'>
                 <span>{item.name}</span>
                 <span>{item.price}/-</span>
                 <span onClick={()=>removeItem(item.id)} className='text-red-500 cursor-pointer'>Remove</span>
                </li>              

            ))}
          </ul>  
        )}

        {cart.length > 0 &&(
         <div className='flex justify-between'>
             <span className='mb-2 mt-2 ml-2 text-lg font-bold'>Total:</span>
             <span className='mb-2 mt-2 mr-2 text-lg font-bold'>${cart.reduce((total,item)=>total + item.price ,0).toFixed(2)}</span>
         </div>

        )}
        <div className='mt-4 flex justify-center mb-4'>
            <button className='bg-amber-600 text-white px-4 py-2 rounded-2xl w-1/2' aria-label="Checkout">
              Checkout
            </button>
          </div>
      </div>
      
    )}

   
   
     
    </div>
  );
}

export default Navbar;