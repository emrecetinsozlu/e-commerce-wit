import React from 'react'
import Header from './Header.jsx';


function Home() {
  return (
    <div>
        <Header />
        <section>
            <div className='w-full relative'>
                <img src=" /hero_image.jpg" alt="" className='w-full object-cover md:h-lvh '/>
                <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-6 text-white text-center bg-black/40'>
                    <h1 className="text-xl font-bold max-w-[200px] md:max-w-none break-words leading-tight"> GROCERIES DELIVERY</h1>
                    <p>We know how large objects <br />will act, but things on a small scale</p>
                    <button className='button-sm md:button-mb'> Start Now</button>
                </div>
              
            </div>
        </section>
    </div>
  )
}

export default Home
