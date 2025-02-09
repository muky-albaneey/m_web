"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import './wait.css';

export default function WaitList() {
  return (
    <div className="bg-gradient-to-b from-[#021B79] via-[#004AAD] to-[#38B6FF] min-h-[90vh] flex flex-col justify-center items-center text-white px-6">

      {/* Logo & Header */}
      <div className="text-center">
        <section>
                <Image
                    src="/logo_extra.png"
                    alt="Mona Protect Logo"
                    width={78}
                    height={50}
                    className="m-auto"
                    // style={{ width:'78px', height: '50px' }}
                    />
                    <Image
                    src="/logo_1.png"
                    alt="Mona Protect Logo"
                    width={120}
                    height={50}
                    className="m-auto"
                    />
        </section>
        <h1 className="text-2xl md:text-[45px] font-dm-sans font-extrabold mt-4 text-[#FFFFFF] md:leading-[61.6px]">
  Reliable Protection, <br /> Simplified Repairs
</h1>


<p
  className="text-xs md:text-[18px] font-Dm-Sans font-normal leading-[16px] md:leading-[19.2px] tracking-normal text-center mt-2 mx-auto max-w-lg"
  id="w_desc"
>
  We offer complete protection for your mobile devices, keeping you
  connected to the things that matter most.
</p>


      </div>

      {/* Email Subscription Box */}
      {/* <div className="mt-6 flex items-center justify-center w-full">
  <div className="flex w-full max-w-lg space-x-2 p-1 bg-gray-100 rounded-xl shadow-md">
    <input
      type="email"
      placeholder="Enter Email Address"
      className="flex-1 px-4 py-2 text-gray-900 bg-transparent rounded-lg outline-none border-none"
    />
    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition">
      Join Our Waitlist
    </button>
  </div>
</div> */}
<div className="mt-6 flex items-center justify-center w-full px-4">
  <div className="flex w-full max-w-2xl bg-white/20 backdrop-blur-md overflow-hidden shadow-lg">
    <input
      type="email"
      placeholder="Enter Email Address"
      className="flex-1 px-3 py-2 sm:px-4 sm:py-3 text-white bg-transparent outline-none placeholder-white/60 text-xs sm:text-base"
    />
    <button className="bg-white text-[#004AAD] px-4 sm:px-6 py-2 sm:py-3 font-semibold text-[10px] sm:text-base">
      Join Our Waitlist
    </button>
  </div>
</div>





      {/* Mobile App UI Mockup with Animation */}
      <div className="flex mt-12 space-x-6" id="img_logo_con">
     

      {/* <motion.div
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 10 }}
  transition={{ duration: 3, ease: "easeOut" }} // Reduced duration for faster animation
>
  <Image
    src="/phone1.png"
    alt="Mobile Mockup"
    width={210}
    height={560}
    className="rounded-lg shadow-lg"
    id="logo_img"
    // style={{ height:'20rem' }}
  />
</motion.div> */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 20 }}
  transition={{ duration: 3, ease: "easeOut", delay: 0.2 }} // Reduced duration
>
  <Image
    src="/group.png"
    alt="Mobile App UI"
    width={692}
    height={445}
    className="rounded-lg shadow-lg logo_img_2"
    // style={{ height:'20rem' }}
    id="logo_img"
  />
</motion.div>

      </div>
    </div>
  );
}
