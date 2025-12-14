"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card
        className="shadow-xl ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-2xl hover:ring-[#1e3a8a]/50 hover:ring-2"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </Card>
    </motion.div>
  )
}
