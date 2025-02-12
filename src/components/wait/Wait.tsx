import React from 'react';
import './waity.css';

export default function Wait() {
  return (
    <div className='bg-gradient-to-b from-[#021B79] via-[#004AAD] to-[#38B6FF]' id='wait_wrapper'>
      <section id="top_con">
                <img
                    src="/l_1.png"
                    alt="Mona Protect Logo"
                    className=""
                    id="top_logo"
                  />
            <h1 className="text-[#FFFFFF] text-center">
          Reliable Protection, Simplified Repairs
        </h1>
        <p className="text-center text-white" id="decript_p">
          We offer complete protection for your mobile devices, keeping you
          connected to the things that matter most.
        </p>
       <section id="input">
       <input  type="email"
       className='bg-white/5  0 backdrop-blur-md shadow-lg text-white bg-transparent outline-none placeholder-white/60'
          placeholder="Enter Email Address"  id='input' />
        <button className="bg-white text-[#004AAD]">
         Join Our Waitlist
      </button>
       </section>
      </section>
      <section id="bottom_con">
      <img 
              src="/group.png" 
              alt="Mobile App UI" 
              className="rounded-lg shadow-lg" 
              id="phone_img"
            />
      </section>
    </div>
  )
}
