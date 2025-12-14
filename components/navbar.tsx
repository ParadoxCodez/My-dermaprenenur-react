"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className={`text-2xl font-bold font-serif transition-colors duration-500 ${
              scrolled ? "text-[#1e3a8a]" : "text-white"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Dermapreneur
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Speakers", "Pricing", "FAQs", "Venue", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium relative transition-colors duration-300 ${
                  scrolled ? "text-gray-700 hover:text-[#1e3a8a]" : "text-white/90 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              className={`font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:text-[#1e3a8a]" : "text-white/90 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-gray-700 hover:text-[#1e3a8a]" : "text-white hover:text-white/80"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="px-4 py-2 space-y-2">
            {["Home", "About", "Speakers", "Pricing", "FAQs", "Venue", "Contact", "Login"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
