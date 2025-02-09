"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import './wait.css';

export default function WaitList() {
  return (
    // <div className="bg-gradient-to-b from-[#021B79] via-[#004AAD] to-[#38B6FF] min-h-[72vh] lg:min-h-[90vh] flex flex-col justify-center items-center text-white px-6" id="wrapper">
<div className="bg-gradient-to-b from-[#021B79] via-[#004AAD] to-[#38B6FF] flex flex-col justify-center items-center text-white px-6" id="wrapper">

      {/* Logo & Header */}
      <div className="text-center">
        <section>
                <Image
                    src="/l_1.png"
                    alt="Mona Protect Logo"
                    width={78}
                    height={50}
                    className="m-auto"
                    // style={{ width:'78px', height: '50px' }}
                    />
                    {/* <Image
                    src="/logo_1.png"
                    alt="Mona Protect Logo"
                    width={120}
                    height={50}
                    className="m-auto"
                    /> */}
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
      <div id="img_logo_con">
     
      {/* */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.2 }} // Reduced duration
        >
          <Image
            src="/group.png"
            alt="Mobile App UI"
            width={602}
            height={390}
            className="rounded-lg shadow-lg logo_img_2"
            // style={{ height:'20rem' }}
            id="logo_img"
          />
        </motion.div>

      </div>
    </div>
  );
}
