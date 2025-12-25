import React from 'react'
import Header from './Header.jsx';


function Home() {
  return (
    <div>
        <Header />
        <section>
            <div className='w-full relative'>
                <img src="../../public/product-slide-1.jpg" alt=""/>
                <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-6 text-white'>
                    <h1>GROCERIES <br /> DELIVERY</h1>
                    <p>We know how large objects <br />will act, but things on a small scale</p>
                    <button> Start Now</button>
                </div>
              
            </div>
        </section>
    </div>
  )
}

export default Home
