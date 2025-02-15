import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Whyus from "./components/whyus/Whyus";
import ReviewSection from "./components/review/ReviewSection";
import Footer from "./components/footer/Footer";


function App() {
 const [cart,setCart] =useState([]);
 const addToCart =(data)=>{
  setCart((prevcart)=>[...prevcart,data]);
 };

 const removeItem = (id)=>{
  const remove = cart.filter(item => item.id !== id)
  setCart(remove)


 }

 

  return (
    <div>
      <Navbar cart={cart}  removeItem ={removeItem}/>
      <section id="home">
        <Hero />
      </section>
      <section id="products">
        <Products addToCart={addToCart} />
      </section>
      <section id="features">
        <Whyus />
      </section>
      <section id="reviews">
        <ReviewSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;
