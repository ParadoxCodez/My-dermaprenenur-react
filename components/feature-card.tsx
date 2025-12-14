"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  iconColor?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  iconColor = "rgba(251, 146, 60, 0.15)", // Default orange tint
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: `0 20px 25px -5px ${iconColor}, 0 10px 10px -5px ${iconColor}`,
      }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="border border-gray-200 hover:border-[#1e3a8a]/30 transition-all duration-300 bg-white shadow-xl h-full">
        <div className="p-8 h-full">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 font-serif">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}
