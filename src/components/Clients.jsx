import React from 'react'
import { FaHooli } from "react-icons/fa6";
import { FaLyft } from "react-icons/fa6";
import { FaPiedPiperHat } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";

function Clients() {
  return (
    <ul className='text-second-text-color text-8xl w-full flex flex-col items-center justify-around gap-1 px-8 py-10'>
      <li>
        <FaHooli/>
      </li>
       <li className=''>
        <FaLyft/>
      </li>
       <li className=''>
        <FaPiedPiperHat/>
      </li>
       <li className=''>
        <FaStripe/>
      </li>
       <li>
        <FaAws/>
      </li>
       <li>
        <FaRedditAlien/>
      </li>
    </ul>
  )
}

export default Clients
