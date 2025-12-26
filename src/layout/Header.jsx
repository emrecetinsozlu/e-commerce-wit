import React, {useState} from 'react' 
import { Menu, Search, ShoppingCart, X, UserRound,TextAlignJustify } from "lucide-react";

import {Link, NavLink} from 'react-router-dom';  

function Header() {


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className='px-8 py-4'>
     
      <div className='flex justify-between items-center'>
        <h3 className='text-2xl font-bold text-[#252B42] m-0'>Bandage</h3>
        <nav className='hidden md:block'>
          <ul className='flex gap-6 font-normal'>
              <li className='my-7'>
                  <NavLink exact to='/' className='text-[#737373]'>Home</NavLink>
              </li>
            <li className='my-7'>
                <NavLink to='/shop' className='text-[#737373]'>Shop</NavLink>
            </li>
            <li className='my-7'>
                <NavLink to='/about' className='text-[#737373]'>About</NavLink>
            </li>
            <li className='my-7'>
                <NavLink to='/blog' className='text-[#737373]'>Blog</NavLink>
            </li>
            <li className='my-7'>
                <NavLink to='/contact' className='text-[#737373]'>Contact</NavLink>
            </li>
             <li className='my-7'>
                <NavLink to='/pages' className='text-[#737373]'>Pages</NavLink>
            </li>
          </ul>
        </nav>
        <div className='flex gap-6 '>
          <button>
            <UserRound size={24} />
          </button>
          <button>
            <Search size={24}/>
          </button>
          <button>
            <ShoppingCart size={24} />  
          </button>
          <button>
            <TextAlignJustify size={24} onClick={() => {setIsOpen(!isOpen)}} />  
          </button>
        </div>
      </div>
    </header>

    {isOpen && (
      <nav className='font-normal text-3xl w-full text-center'>
        <ul className=''>
          <li className='my-7'>
              <NavLink exact to='/' className='text-[#737373]'>Home</NavLink>
          </li>
        <li className='my-7'>
            <NavLink to='/products' className='text-[#737373]'>Product</NavLink>
        </li>
        <li className='my-7'>
            <NavLink to='/shop' className='text-[#737373]'>Shop</NavLink>
        </li>
        <li className='my-7'>
            <NavLink to='/pricing' className='text-[#737373]'>Pricing</NavLink>
        </li>
        <li className='my-7'>
            <NavLink to='/contact' className='text-[#737373]'>Contact</NavLink>
        </li>
      </ul>
    </nav>
    )}
    </>
  )
}


      
      
      

export default Header
