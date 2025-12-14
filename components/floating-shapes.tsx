"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle - Navy Blue */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#1e3a8a]/10 blur-3xl"
        initial={{ x: "-20%", y: "10%", scale: 1 }}
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["10%", "30%", "10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      {/* Elongated capsule - Coral */}
      <motion.div
        className="absolute w-[500px] h-64 rounded-full bg-[#ff6347]/10 blur-3xl"
        initial={{ x: "0%", y: "0%", rotate: 45 }}
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "20%", "0%"],
          rotate: [45, 60, 45],
        }}
        transition={{
          duration: 70,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "10%" }}
      />

      {/* Medium circle - Navy Blue */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-[#1e3a8a]/8 blur-2xl"
        initial={{ x: "0%", y: "0%", scale: 1 }}
        animate={{
          x: ["0%", "20%", "0%"],
          y: ["0%", "-10%", "0%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 55,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ bottom: "15%", left: "20%" }}
      />

      {/* Small circle - Coral */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-[#ff6347]/8 blur-2xl"
        initial={{ x: "0%", y: "0%", scale: 1 }}
        animate={{
          x: ["0%", "-25%", "0%"],
          y: ["0%", "15%", "0%"],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "60%", right: "25%" }}
      />

      {/* Elongated vertical capsule - Navy Blue */}
      <motion.div
        className="absolute w-32 h-80 rounded-full bg-[#1e3a8a]/10 blur-2xl"
        initial={{ x: "0%", y: "0%", rotate: -30 }}
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "-20%", "0%"],
          rotate: [-30, -15, -30],
        }}
        transition={{
          duration: 65,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ bottom: "30%", right: "5%" }}
      />
    </div>
  )
}
