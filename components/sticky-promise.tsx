"use client"

import { motion } from "framer-motion"

export function StickyPromise() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 w-80 z-40"
    >
      <div className="bg-white/95 backdrop-blur-sm border-2 border-[#1e3a8a] rounded-lg shadow-2xl p-6">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-[#1e3a8a] mb-3 font-serif text-center">MY PROMISE TO YOU</h4>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm italic">
          I guarantee that you'll receive at least <span className="font-bold text-[#1e3a8a]">3x the value</span> of
          what you've put in. And if, by the end of the 2.5 days, you don't feel it's been worth every minute and penny,
          then your <span className="font-bold text-[#1e3a8a]">investment is on me—no questions asked.</span>
        </p>
      </div>
    </motion.div>
  )
}
