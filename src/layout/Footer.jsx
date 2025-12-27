import React from 'react'
import {Link} from 'react-router-dom';  
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <div className='text-white bg-dark-background-color flex flex-col items-start px-22'>
      <h3>Consulting Agency For Your Business</h3>
      <p>the quick fox jumps over </p>
      <p> the lazy dog </p>
      <button className='button-sm'>Contact Us</button>
      <div className='footer_container p-4'>
        <div>
            <h5>Company Info</h5>
            <ul>
                <li>
             
                    <Link><FiPhone/> About Us</Link>
  
                </li>
                <li>
                    <Link>Carrier</Link>
                </li>
                <li>
                    <Link>We are hiring</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
            </ul>
        </div>
         <div>
            <h5>Legal</h5>
            <ul>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link>Carrier</Link>
                </li>
                <li>
                    <Link>We are hiring</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
            </ul>
        </div>
         <div>
            <h5>Features</h5>
            <ul>
                <li>
                    <Link>Business Marketing</Link>
                </li>
                <li>
                    <Link>User Analytic</Link>
                </li>
                <li>
                    <Link>Live Chat</Link>
                </li>
                <li>
                    <Link>Unlimited Support</Link>
                </li>
            </ul>
        </div>
        <div>
            <h5>Get In Touch </h5>
            <ul>
                <li>
                    <Link>Business Marketing</Link>
                </li>
                <li>
                    <Link>User Analytic</Link>
                </li>
                <li>
                    <Link>Live Chat</Link>
                </li>
                <li>
                    <Link>Unlimited Support</Link>
                </li>
            </ul>
        </div>
      </div>
      

    </div>
  )
}

export default Footer
