"use client"

import { motion } from "framer-motion"

interface QuoteBlockProps {
  quote: string
  author?: string
}

export function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gray-50 p-8 md:p-12 rounded-lg border-l-4 border-[#1e3a8a] shadow-lg my-12"
    >
      {/* Large decorative quotation mark */}
      <div className="absolute top-6 left-6 text-8xl text-[#1e3a8a] opacity-10 font-serif leading-none select-none">
        &ldquo;
      </div>

      {/* Quote text */}
      <div className="relative z-10">
        <p className="text-xl md:text-2xl text-gray-800 font-serif italic leading-relaxed mb-4">{quote}</p>
        {author && <p className="text-right text-gray-600 font-sans font-semibold">&mdash; {author}</p>}
      </div>
    </motion.div>
  )
}
