import React from 'react'
import Header from './Header.jsx';
import CardItem from '../components/CardItem.jsx';
import Clients from '../components/Clients.jsx';
import Footer from './Footer.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";


// "text-4xl md:text-6xl font-normal max-w-[254px] text-center  md:max-w-none text-center leading-normal tracking-wide

function Home() {
  return (
    <div>
        <Header />
        <section className='hero_section'>
            <div className='w-full relative'>
                <div className="">
                  <img src=" /hero_image.jpg" alt="" className='w-full h-[683px]  object-cover md:h-lvh '/>
                </div>
                <div className='bg-black/30 absolute top-0 left-0 w-full h-full z-10'></div>
                <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-6 text-white text-center z-20'>
                    <h1 className="text-4xl tracking-[0.2px] font-bold text-center"> GROCERIES DELIVERY</h1>
                    <p className='font-normal md:text-3xl'>We know how large objects <br />  will act, but things on <br /> a small scale</p>
                    <button className='button-sm md:bg-[#23A6F0] text-white text-xl font-bold px-6 py-3 rounded-sm hover:bg-[#1b87c9] transition'> Start Now</button>
                </div>
            </div>
        </section>
        <section className='flex flex-wrap py-10 px-8 justify-center md:justify-around bg-[#FAFAFA] gap-4'>
          <CardItem/>
          <CardItem/>
          <CardItem/>
         
        </section>
        <section>
          <div className='w-full flex justify-center relative py-10'>
            <div className='absolute top-10 left-0 py-10 px-8 flex flex-col gap-1'>
              <h6 className='font-bold'>FURNITURE</h6>
              <p className='text-xs font-bold tracking-[0.2px] leading-[24px] text-second-text-color'>5 Items</p>
            </div>
            <img src="../../public/image1.jpg" alt="" className='w-full py-4 px-4' />
          </div>
        </section>

        <section className='bestseller flex flex-col justify-center items-center p-8 gap-8'>
            <h3 className='text-2xl font-bold text-text-color'>BESTSELLER PRODUCTS</h3>
            <ul className="catergories flex w-full justify-around text-base  tracking-[0.2px] leading-6 text-second-text-color">
              <li>Meats</li>
              <li>Fruits</li>
              <li>Deserts</li>
            </ul>
            <div className="arrows flex justify-center gap-3">
              <button className ='text-3xl text-muted-color  font-thin border rounded-full p-3'>
                <GoChevronLeft/>
              </button>
              <button className ='text-3xl font-thin border rounded-full p-3'>
                <GoChevronRight/>
              </button>
              
            </div>
            <hr className='w-full text-muted-color'/>
            <div className='flex justify-center items-center flex-wrap w-full'>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
           
        </section>
        <section>
          <Clients/>
        </section>
        <Footer/>
    </div>
  )
}

export default Home
