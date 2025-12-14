"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description?: string
  shadowColor?: string
  darkMode?: boolean
}

export function FeatureCard({ icon, title, description, shadowColor = "#F9A825", darkMode = false }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: `0 25px 50px -12px ${shadowColor}80, 0 0 0 1px ${shadowColor}40`,
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="h-full"
    >
      <Card
        className={`border ${
          darkMode
            ? "border-white/20 hover:border-accent-gold/50 bg-white/10 backdrop-blur-sm"
            : "border-gray-200 hover:border-accent-gold/50 bg-white"
        } transition-all duration-300 shadow-xl h-full`}
      >
        <div className="p-8 h-full">
          <div className="text-4xl mb-4 inline-block relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${shadowColor}30 0%, transparent 70%)`,
                filter: "blur(10px)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10">{icon}</span>
          </div>
          <h3 className={`text-xl font-bold mb-3 font-serif ${darkMode ? "text-white" : "text-primary-navy"}`}>
            {title}
          </h3>
          {description && (
            <p className={`leading-relaxed ${darkMode ? "text-white/80" : "text-deep/80"}`}>{description}</p>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
