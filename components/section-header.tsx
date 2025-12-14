"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  accentColor?: string
}

export function SectionHeader({ title, subtitle, accentColor = "#1e3a8a" }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 50, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-0.5 mx-auto mb-6"
        style={{ backgroundColor: accentColor }}
      />
      <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 font-serif">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
