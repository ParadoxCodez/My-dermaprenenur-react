"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X, Users, Award, Target, Zap, Lightbulb, Music, BookOpen } from "lucide-react"

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

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#1e3a8a]">Dermapreneur</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Speakers", "Pricing", "FAQs", "Venue", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-300 font-medium">
                Login
              </button>
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
          <div className="md:hidden border-t border-gray-200 bg-white animate-fade-in">
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
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-[#1e3a8a] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            REGISTRATION CLOSED
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-4 animate-fade-in text-balance leading-tight">
            India's one and only INTENSIVE PRACTICE MANAGEMENT WORKSHOP
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Dedicated to Dermatologists
          </p>

          <h2
            className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mt-8 mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            DERMAPRENEUR 2025
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            10-12 January, 2025 | The Gift City Club, Radisson, Gandhinagar
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white p-4 rounded-lg shadow-md min-w-[80px] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-[#1e3a8a] hover:bg-[#152d6b] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            ADD YOUR NAME IN THE WAITLIST
          </Button>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4">What to Expect</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience a transformative learning journey with comprehensive practice management strategies
          </p>

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
              <Card
                key={index}
                className="border border-gray-200 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-[#1e3a8a]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4">
            The Success Trail Of Previous Versions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join a legacy of excellence and transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "6+", label: "Successful Versions" },
              { number: "610+", label: "Delighted Dermapreneurs" },
              { number: "196+", label: "Hours of Knowledge Delivered" },
              { number: "168+", label: "Insightful & Practical Inputs Delivered" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#1e3a8a] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 font-medium">Previous Events</p>
            <p className="text-gray-600">2020 Virtual | Start up Dermaprenur 2022 | Ai Ai -2024</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4">The Must-Attend Event</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            An exclusive, invitation-only workshop designed for growth-driven dermatologists
          </p>

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
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl font-bold text-[#1e3a8a] mb-2">{item.number}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">The Dermapreneur Difference</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dermapreneur 2025 is an exclusive, invitation-only workshop designed for growth-driven dermatologists,
              offering a 2.5-day immersive experience in practice management and entrepreneurship. With tailored
              strategies, hands-on learning, and cutting-edge insights, it empowers participants to elevate their
              practice and achieve sustainable growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This intensive program combines proven methodologies with innovative approaches, ensuring every attendee
              gains practical tools and actionable strategies they can implement immediately in their practice.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4">Investment Packages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the package that best fits your professional development goals
          </p>

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
              <Card
                key={index}
                className={`${
                  pkg.featured ? "border-4 border-[#1e3a8a] shadow-2xl scale-105" : "border-2 border-gray-200"
                } hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white relative animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1e3a8a] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    RECOMMENDED
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#1e3a8a]">{pkg.price}</div>
                  <CardDescription>Per attendee</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#1e3a8a] mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      pkg.featured
                        ? "bg-[#1e3a8a] hover:bg-[#152d6b] text-white"
                        : "bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-blue-50"
                    } transition-all duration-300 hover:shadow-lg`}
                  >
                    Join Waitlist
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">Find answers to common questions about Dermapreneur 2025</p>

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
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-[#1e3a8a] transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-[#1e3a8a] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-4">Venue</h2>
          <p className="text-center text-gray-600 mb-12">A world-class venue for an exceptional learning experience</p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">The Gift City Club, Radisson</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Located in Gandhinagar, Gujarat, this premium venue offers state-of-the-art facilities and luxurious
                amenities, creating the perfect environment for intensive learning and networking.
              </p>
              <div className="space-y-2 text-gray-700">
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
            <div
              className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-gray-500">Venue Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions? We're here to help you make the most of your Dermapreneur experience
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="text-[#1e3a8a] mb-2">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@dermapreneur.com</p>
              </CardContent>
            </Card>
            <Card
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-[#1e3a8a] mb-2">📞</div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </CardContent>
            </Card>
            <Card
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-[#1e3a8a] mb-2">📍</div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600 text-sm">Gandhinagar, Gujarat</p>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            className="bg-[#1e3a8a] hover:bg-[#152d6b] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            JOIN THE WAITLIST NOW
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dermapreneur</h3>
              <p className="text-blue-200 text-sm">India's premier practice management workshop for dermatologists</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")} className="hover:text-white transition-colors">
                    Pricing
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("faqs")} className="hover:text-white transition-colors">
                    FAQs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event Info</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>January 10-12, 2025</li>
                <li>Gandhinagar, Gujarat</li>
                <li>The Gift City Club</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm text-blue-200 mb-2">Stay updated with our latest news</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-8 text-center text-sm text-blue-200">
            <p>&copy; 2025 Dermapreneur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
