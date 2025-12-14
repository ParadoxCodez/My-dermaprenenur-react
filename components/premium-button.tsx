"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface PremiumButtonProps {
  children: React.ReactNode
  onClick?: () => void
  size?: "default" | "sm" | "lg"
  className?: string
}

export function PremiumButton({ children, onClick, size = "lg", className = "" }: PremiumButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        size={size}
        onClick={onClick}
        className={`bg-[#1e3a8a] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] hover:ring-4 hover:ring-[#1e3a8a]/20 ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  )
}
