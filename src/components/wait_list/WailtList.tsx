"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import './wait.css';

export default function WaitList() {
  return (
    <div className="bg-gradient-to-b from-[#021B79] via-[#004AAD] to-[#38B6FF] " id="waitWrapper">
      <div id="one">
        <section>
          <Image
            src="/l_1.png"
            alt="Mona Protect Logo"
            width={78}
            height={50}
            className="m-auto"
          />
        </section>
        <h1 className="text-2xl md:text-[40px] font-dm-sans font-semibold mt-4 text-[#FFFFFF] md:leading-[38.6px] text-center">
          Reliable Protection, <br /> Simplified Repairs
        </h1>
        <p className="text-xs md:text-[14px] font-dm-sans font-normal leading-[10px] md:leading-[19.2px] text-center mt-2 mx-auto max-w-lg text-white">
          We offer complete protection for your mobile devices, keeping you
          connected to the things that matter most.
        </p>
      </div>
      <div id="two">
        <div className="mt-6 flex items-center justify-center w-full px-4" id="join_now">
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
        <motion.div 
            initial={{ opacity: 0, y: 30 }} // Reduce initial Y value
            animate={{ opacity: 1, y: 10 }} // Ensure it aligns properly
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="image-container"
          >
            <img 
              src="/group.png" 
              alt="Mobile App UI" 
              className="rounded-lg shadow-lg" 
              id="logo_img"
            />
      </motion.div>

      </div>
    </div>
  );
}
