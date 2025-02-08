"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import './wait.css';

export default function WaitList() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen flex flex-col justify-center items-center text-white px-6">
      {/* Logo & Header */}
      <div className="text-center">
        <Image
          src="/logo.png"
          alt="Mona Protect Logo"
          width={120}
          height={50}
          className="m-auto"
        />
        <h1 className="text-2xl md:text-5xl font-bold mt-4">
          Reliable Protection <br /> Simplified Repairs
        </h1>
        <p className="text-sm md:text-lg m-auto mt-2" id="w_desc">
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
  <div className="flex w-full max-w-2xl bg-white/20 backdrop-blur-md rounded-lg overflow-hidden shadow-lg">
    <input
      type="email"
      placeholder="Enter Email Address"
      className="flex-1 px-3 py-2 sm:px-4 sm:py-3 text-white bg-transparent outline-none placeholder-white/60 text-xs sm:text-base"
    />
    <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 font-semibold text-[10px] sm:text-base">
      Join Our Waitlist
    </button>
  </div>
</div>





      {/* Mobile App UI Mockup with Animation */}
      <div className="flex mt-12 space-x-6">
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 10 }}
  transition={{
    duration: 3, // Faster animation
    ease: "easeInOut",
    repeat: Infinity, // Infinite loop
    repeatType: "reverse", // Reverses back and forth
  }}
>
  <Image
    src="/phone1.png"
    alt="Mobile Mockup"
    width={180}
    height={360}
    className="rounded-lg shadow-lg"
  />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 150 }}
  animate={{ opacity: 1, y: 20 }}
  transition={{
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
    delay: 0.2,
  }}
>
  <Image
    src="/phone2.png"
    alt="Mobile App UI"
    width={180}
    height={360}
    className="rounded-lg shadow-lg"
  />
</motion.div>

      {/* <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 10 }}
  transition={{ duration: 3, ease: "easeOut" }} // Reduced duration for faster animation
>
  <Image
    src="/phone2.png"
    alt="Mobile Mockup"
    width={210}
    height={460}
    className="rounded-lg shadow-lg"
  />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 150 }}
  animate={{ opacity: 1, y: 20 }}
  transition={{ duration: 3, ease: "easeOut", delay: 0.2 }} // Reduced duration
>
  <Image
    src="/phone1.png"
    alt="Mobile App UI"
    width={210}
    height={460}
    className="rounded-lg shadow-lg"
  />
</motion.div> */}

      </div>
    </div>
  );
}
