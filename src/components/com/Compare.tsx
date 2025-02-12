import { motion } from "framer-motion";
import Image from 'next/image'
import React from 'react'
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // ✅ ❌ Icons
import './com.css';
export default function Compare() {
  return (
    <div id="com_wrapper">
      <section id="com_1">
      <h2
       
        className="font-dm-sans font-semibold text-center"
        // style={{ color:'black',fontFamily:'Verdana, Geneva, Tahoma, sans-serif' }}
        >
        We go beyond your Manufacturer Warranty
        </h2>
      </section>
      <section id="com_2">
      <table className="w-full border-collapse border border-gray-300 !mb-0">
      {/* Table Head */}
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-xs sm:text-lg font-semibold border-b border-gray-300 bg-[#FFFFFF]">
              <th className="p-3 sm:p-4 text-left border-r border-gray-300">Compare Features</th>
              <th className="p-3 sm:p-4 text-center border-r border-gray-300">
                <Image
                  src="/mona_blue.png" // Replace with actual logo path
                  alt="Mona Protect"
                  width={100}
                  height={25}
                  className="mx-auto"
                />
              </th>
              <th className="p-3 sm:p-4 text-center">Others</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700 text-[10px] sm:text-sm">
            {[
              { feature: "Protect any Phone – Old or New", mona: "Old or New", others: "Only Brand New" },
              { feature: "Protection for Device bought anywhere in the world", mona: <FaCheckCircle className="text-blue-500 mx-auto" />, others: <FaTimesCircle className="text-red-500 mx-auto" /> },
              { feature: "Protection for all Brands with one Account", mona: <FaCheckCircle className="text-blue-500 mx-auto" />, others: <FaTimesCircle className="text-red-500 mx-auto" /> },
              { feature: "Cost of Repairs", mona: "100% Free - No Hidden Charges", others: "Extra Charges" },
              { feature: "Accidental damage", mona: "Full coverage annually", others: "No Coverage" },
              { feature: "No. of Repairs Allowed", mona: "Unlimited Repairs", others: "Limited Repairs" },
              { feature: "Wide Network of Authorized Service Centers", mona: <FaCheckCircle className="text-blue-500 mx-auto" />, others: <FaTimesCircle className="text-red-500 mx-auto" /> },
              { feature: "Repairs Wait Time", mona: "Same Day Service", others: "Up to 7 days" },
            ].map((row, index, arr) => (
                <tr
                  key={index}
                  className={`border-b border-gray-300 ${index === arr.length - 1 ? "last:border-b-0" : ""}`}
                >
                  <td className="p-3 sm:p-4 border-r border-gray-300">{row.feature}</td>
                  <td className="p-3 sm:p-4 text-center font-medium border-r border-gray-300">{row.mona}</td>
                  <td className="p-3 sm:p-4 text-center">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section id="com_3">
      <footer
        
        className="text-center text-gray-600 text-xs sm:text-sm mt-6 bg-[#FFFFFF] w-full py-6  shadow-md"
      >
        Copyright © 2025 Mona Tech LTD. All rights reserved.
      </footer>
      </section>
    </div>
  )
}
