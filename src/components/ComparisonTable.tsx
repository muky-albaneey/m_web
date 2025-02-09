"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // ✅ ❌ Icons

export default function ComparisonTable() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]  bg-gray-100 px-4 sm:px-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm md:text-[46px] font-dm-sans font-extrabold leading-[20px] md:leading-[61.6px] tracking-[-3%] text-center mb-4 md:mb-8"
        >
        We go beyond your <br /> Manufacturer's Warranty
        </motion.h2>

        
      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden"
      >
        <table className="w-full border-collapse border border-gray-300">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-xs sm:text-lg font-semibold border-b border-gray-300">
              <th className="p-3 sm:p-4 text-left border-r border-gray-300">Compare Features</th>
              <th className="p-3 sm:p-4 text-center border-r border-gray-300">
                <Image
                  src="/logo.png" // Replace with actual logo path
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
            ].map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="border-b border-gray-300"
              >
                <td className="p-3 sm:p-4 border-r border-gray-300">{row.feature}</td>
                <td className="p-3 sm:p-4 text-center font-medium border-r border-gray-300">{row.mona}</td>
                <td className="p-3 sm:p-4 text-center">{row.others}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="text-center text-gray-600 text-xs sm:text-sm mt-6"
      >
        Copyright © 2025 Monaprotect. All rights reserved.
      </motion.footer>
    </div>
  );
}
