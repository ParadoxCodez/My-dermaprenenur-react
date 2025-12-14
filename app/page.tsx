"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X, Users, Award, Target, Zap, Lightbulb, Music, BookOpen } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function DermapreneurLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date("2025-01-10T00:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-[#1e3a8a] text-white text-center py-2 px-4 text-sm font-medium">REGISTRATION CLOSED</div>

      {/* Navigation - Fixed to top with enhanced styling */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#1e3a8a] font-serif">Dermapreneur</div>

            {/* Desktop Navigation - Added Framer Motion hover effects */}
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Speakers", "Pricing", "FAQs", "Venue", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 font-medium relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className="relative" whileHover={{ color: "#1e3a8a" }}>
                    {item}
                  </motion.span>
                </motion.button>
              ))}
              <motion.button
                className="text-gray-700 font-medium"
                whileHover={{ scale: 1.05, color: "#1e3a8a" }}
                transition={{ duration: 0.2 }}
              >
                Login
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-[#1e3a8a] transition-colors"
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
      </nav>

      <div className="mt-16">
        {/* Hero Section - Increased padding to py-32 for better breathing room */}
        <section
          id="home"
          className="relative bg-gradient-to-br from-white via-blue-50 to-white py-32 px-4 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block bg-[#1e3a8a] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                REGISTRATION CLOSED
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-4 text-balance leading-tight font-serif">
                India's one and only INTENSIVE PRACTICE MANAGEMENT WORKSHOP
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-600 mb-2 leading-relaxed">Dedicated to Dermatologists</p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mt-8 mb-4 font-serif">DERMAPRENEUR 2025</h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                10-12 January, 2025 | The Gift City Club, Radisson, Gandhinagar
              </p>
            </FadeIn>

            {/* Countdown Timer - Enhanced shadows to shadow-xl */}
            <FadeIn delay={0.5}>
              <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                  { label: "Minutes", value: countdown.minutes },
                  { label: "Seconds", value: countdown.seconds },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="bg-white p-4 rounded-lg shadow-xl min-w-[80px] ring-1 ring-gray-100"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(30, 58, 138, 0.1), 0 10px 10px -5px rgba(30, 58, 138, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Button
                  size="lg"
                  className="bg-[#1e3a8a] hover:bg-[#152d6b] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:ring-2 hover:ring-[#1e3a8a]/50"
                >
                  ADD YOUR NAME IN THE WAITLIST
                </Button>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* What to Expect Section - Increased padding to py-32 */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4 font-serif">
                What to Expect
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience a transformative learning journey with comprehensive practice management strategies
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Fun Way Learning", number: "5" },
                { icon: Lightbulb, title: "Innovative Insights", number: "4" },
                { icon: Zap, title: "Cutting-edge Tools & Inputs", number: "8" },
                { icon: Award, title: "Actionable Ideas", number: "6" },
                { icon: Users, title: "Hands-on Experience", number: "1" },
                { icon: BookOpen, title: "Engaging Role Plays", number: "7" },
                { icon: BookOpen, title: "Thought Provoking Workbooks", number: "2" },
                { icon: Music, title: "Entertainment Evenings", number: "3" },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(30, 58, 138, 0.15), 0 10px 10px -5px rgba(30, 58, 138, 0.08)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border border-gray-200 hover:border-[#1e3a8a] transition-colors duration-300 bg-white shadow-xl h-full">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                          <item.icon className="w-8 h-8 text-[#1e3a8a]" />
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2 leading-relaxed">{item.title}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Increased padding to py-32 */}
        <section className="py-32 px-4 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4 font-serif">
                The Success Trail Of Previous Versions
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join a legacy of excellence and transformation
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "6+", label: "Successful Versions" },
                { number: "610+", label: "Delighted Dermapreneurs" },
                { number: "196+", label: "Hours of Knowledge Delivered" },
                { number: "168+", label: "Insightful & Practical Inputs Delivered" },
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(30, 58, 138, 0.2), 0 10px 10px -5px rgba(30, 58, 138, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-[#1e3a8a] transition-colors duration-300 bg-white shadow-xl hover:ring-2 hover:ring-[#1e3a8a]/50">
                      <CardContent className="p-8 text-center">
                        <div className="text-5xl font-bold text-[#1e3a8a] mb-2 font-serif">{stat.number}</div>
                        <div className="text-gray-600 leading-relaxed">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-gray-700 font-medium">Previous Events</p>
                <p className="text-gray-600 leading-relaxed">2020 Virtual | Start up Dermaprenur 2022 | Ai Ai -2024</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section - Increased padding to py-32 */}
        <section id="about" className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4 font-serif">
                The Must-Attend Event
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                An exclusive, invitation-only workshop designed for growth-driven dermatologists
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  number: "01",
                  title: "2 and half day",
                  description: "2 and half days' intensive fun-filled experiential learning experience.",
                },
                {
                  number: "02",
                  title: "Designated",
                  description: "Designed for inner circle only who are having the growth mindset.",
                },
                {
                  number: "03",
                  title: "Narrowing down",
                  description: "Narrowing down seats to the limited numbers only.",
                },
                {
                  number: "04",
                  title: "Restricted",
                  description: "Restricted number of delegates to just like-minded and growth-minded dermatologists.",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border border-gray-200 hover:border-[#1e3a8a] transition-colors duration-300 bg-white shadow-xl h-full">
                      <CardHeader>
                        <div className="text-4xl font-bold text-[#1e3a8a] mb-2 font-serif">{item.number}</div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="bg-blue-50 rounded-lg p-8 mb-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 font-serif">The Dermapreneur Difference</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dermapreneur 2025 is an exclusive, invitation-only workshop designed for growth-driven dermatologists,
                  offering a 2.5-day immersive experience in practice management and entrepreneurship. With tailored
                  strategies, hands-on learning, and cutting-edge insights, it empowers participants to elevate their
                  practice and achieve sustainable growth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This intensive program combines proven methodologies with innovative approaches, ensuring every
                  attendee gains practical tools and actionable strategies they can implement immediately in their
                  practice.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pricing Section - Increased padding to py-32 */}
        <section id="pricing" className="py-32 px-4 bg-gradient-to-br from-white via-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4 font-serif">
                Investment Packages
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Choose the package that best fits your professional development goals
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Basic",
                  price: "₹45,000",
                  features: [
                    "Full workshop access",
                    "Workshop materials",
                    "Networking sessions",
                    "Certificate of participation",
                    "Refreshments included",
                  ],
                  featured: false,
                },
                {
                  name: "Premium",
                  price: "₹75,000",
                  features: [
                    "Everything in Basic",
                    "VIP seating arrangement",
                    "Exclusive networking dinner",
                    "One-on-one mentorship session",
                    "Premium workshop kit",
                    "Post-event consultation",
                  ],
                  featured: true,
                },
                {
                  name: "Elite",
                  price: "₹1,20,000",
                  features: [
                    "Everything in Premium",
                    "Private speaker sessions",
                    "Luxury accommodation",
                    "Airport transfers",
                    "Extended mentorship program",
                    "Lifetime community access",
                  ],
                  featured: false,
                },
              ].map((pkg, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: pkg.featured
                        ? "0 25px 50px -12px rgba(30, 58, 138, 0.25)"
                        : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card
                      className={`${
                        pkg.featured
                          ? "border-4 border-[#1e3a8a] shadow-2xl scale-105"
                          : "border-2 border-gray-200 shadow-xl"
                      } hover:ring-2 hover:ring-[#1e3a8a]/50 transition-all duration-300 bg-white relative h-full`}
                    >
                      {pkg.featured && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1e3a8a] text-white px-4 py-1 rounded-full text-sm font-semibold">
                          RECOMMENDED
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                        <div className="text-4xl font-bold text-[#1e3a8a] font-serif">{pkg.price}</div>
                        <CardDescription>Per attendee</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#1e3a8a] mr-2 font-bold">✓</span>
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            className={`w-full ${
                              pkg.featured
                                ? "bg-[#1e3a8a] hover:bg-[#152d6b] text-white shadow-lg"
                                : "bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-blue-50"
                            } transition-all duration-300`}
                          >
                            Join Waitlist
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Increased padding to py-32 */}
        <section id="faqs" className="py-32 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4 font-serif">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-center text-gray-600 mb-12 leading-relaxed">
                Find answers to common questions about Dermapreneur 2025
              </p>
            </FadeIn>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Who can attend Dermapreneur 2025?",
                  answer:
                    "Dermapreneur 2025 is exclusively designed for practicing dermatologists who have a growth mindset and are looking to enhance their practice management skills. This is an invitation-only event for growth-driven professionals.",
                },
                {
                  question: "What is included in the workshop fee?",
                  answer:
                    "The workshop fee includes full access to all sessions, workshop materials, networking events, meals and refreshments during the event, certificate of participation, and access to post-event resources. Premium packages include additional benefits such as one-on-one mentorship and exclusive networking opportunities.",
                },
                {
                  question: "Will there be hands-on learning opportunities?",
                  answer:
                    "Yes! Dermapreneur emphasizes experiential learning through role plays, interactive workshops, practical exercises, and real-world case studies. You will gain actionable insights that you can implement immediately in your practice.",
                },
                {
                  question: "What is the refund policy?",
                  answer:
                    "Due to the exclusive nature of this event and limited seating, we have a strict no-refund policy. However, registrations are transferable to another qualified dermatologist with prior approval from the organizing committee.",
                },
                {
                  question: "How do I join the waitlist?",
                  answer:
                    'Since registration is currently closed, you can join our waitlist by clicking the "Add Your Name in the Waitlist" button. We will notify you as soon as spots become available or for information about future events.',
                },
                {
                  question: "What topics will be covered?",
                  answer:
                    "The workshop covers comprehensive practice management topics including business strategy, patient acquisition and retention, financial management, team building, marketing strategies, digital presence, and operational excellence. All content is specifically tailored for dermatology practices.",
                },
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-[#1e3a8a] transition-colors duration-300 shadow-md"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-[#1e3a8a] hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </FadeIn>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Venue Section - Increased padding to py-32 */}
        <section id="venue" className="py-32 px-4 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4 font-serif">Venue</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-center text-gray-600 mb-12 leading-relaxed">
                A world-class venue for an exceptional learning experience
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 font-serif">The Gift City Club, Radisson</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Located in Gandhinagar, Gujarat, this premium venue offers state-of-the-art facilities and luxurious
                    amenities, creating the perfect environment for intensive learning and networking.
                  </p>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Address:</strong> Gift City, Gandhinagar, Gujarat
                    </p>
                    <p>
                      <strong>Dates:</strong> January 10-12, 2025
                    </p>
                    <p>
                      <strong>Facilities:</strong> Conference halls, networking lounges, dining areas
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <motion.div
                  className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-500">Venue Image</span>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section - Increased padding to py-32 */}
        <section id="contact" className="py-32 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 font-serif">Get In Touch</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions? We're here to help you make the most of your Dermapreneur experience
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: "📧", title: "Email", info: "info@dermapreneur.com" },
                { icon: "📞", title: "Phone", info: "+91 98765 43210" },
                { icon: "📍", title: "Location", info: "Gandhinagar, Gujarat" },
              ].map((contact, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border border-gray-200 hover:border-[#1e3a8a] transition-colors duration-300 shadow-xl">
                      <CardContent className="p-6 text-center">
                        <div className="text-[#1e3a8a] mb-2 text-3xl">{contact.icon}</div>
                        <h3 className="font-semibold mb-2">{contact.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{contact.info}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Button
                  size="lg"
                  className="bg-[#1e3a8a] hover:bg-[#152d6b] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:ring-2 hover:ring-[#1e3a8a]/50"
                >
                  JOIN THE WAITLIST NOW
                </Button>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1e3a8a] text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-serif">Dermapreneur</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    India's premier practice management workshop for dermatologists
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    {["About", "Pricing", "FAQs", "Contact"].map((item) => (
                      <li key={item}>
                        <motion.button
                          onClick={() => scrollToSection(item.toLowerCase())}
                          className="hover:text-white transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h4 className="font-semibold mb-4">Event Info</h4>
                  <ul className="space-y-2 text-sm text-blue-200 leading-relaxed">
                    <li>January 10-12, 2025</li>
                    <li>Gandhinagar, Gujarat</li>
                    <li>The Gift City Club</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h4 className="font-semibold mb-4">Connect</h4>
                  <p className="text-sm text-blue-200 mb-2 leading-relaxed">Stay updated with our latest news</p>
                  <div className="flex space-x-4">
                    {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="text-blue-200 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="border-t border-blue-700 pt-8 text-center text-sm text-blue-200">
              <p>&copy; 2025 Dermapreneur. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
