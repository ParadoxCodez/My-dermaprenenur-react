"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn } from "@/components/fade-in"
import { Navbar } from "@/components/navbar"
import { SectionDivider } from "@/components/section-divider"
import { TiltCard } from "@/components/tilt-card"
import { SectionHeader } from "@/components/section-header"
import { PremiumButton } from "@/components/premium-button"
import { FeatureCard } from "@/components/feature-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { QuoteBlock } from "@/components/quote-block"
import { CountdownTimer } from "@/components/countdown-timer" // Assuming this component exists based on usage
import { StickyPromise } from "@/components/sticky-promise"
import { FloatingShapes } from "@/components/floating-shapes"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Countdown state is now managed within CountdownTimer component

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen section-canvas">
      <Navbar />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 bg-primary-dark pt-20 relative overflow-hidden"
      >
        {/* Geometric accent element on the right */}
        <div className="absolute right-0 top-1/4 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ffffff"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,84.9C-23.8,82.2,-39.4,73.8,-53.2,63.8C-67,53.8,-79,42.2,-85.4,27.8C-91.8,13.4,-92.6,-3.8,-87.8,-19.4C-83,-35,-72.6,-49,-59.4,-57.8C-46.2,-66.6,-30.2,-70.2,-15.1,-73.8C0,-77.4,15.1,-81,29.7,-79.8C44.3,-78.6,58.4,-72.6,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute right-0 top-20 md:right-10 md:top-32">
          <div className="text-[200px] md:text-[300px] font-bold text-white/5 leading-none font-serif select-none">
            2025
          </div>
        </div>

        {/* Floating shapes component for perpetual motion */}
        <FloatingShapes />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  translateY: 0,
                }}
                whileInView={{
                  translateY: -20,
                }}
                viewport={{ once: false }}
              >
                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
                  <p className="text-sm md:text-base font-semibold tracking-wide text-white">
                    India's One and Only Intensive Practice Management Workshop
                  </p>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif leading-tight text-white">
                  DERMAPRENEUR 2025
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-white/90">Dedicated to Dermatologists</p>
                <p className="text-lg md:text-xl mb-12 text-white/80">
                  10-12 January, 2025 | The Gift City Club, Radisson, Gandhinagar
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                className="mb-8 flex justify-center"
                style={{
                  translateY: 0,
                }}
                whileInView={{
                  translateY: -10,
                }}
                viewport={{ once: false }}
              >
                <CountdownTimer targetDate={new Date("2025-01-10T09:00:00")} />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-12 py-6 bg-white text-primary-dark hover:bg-accent-gold hover:text-white font-bold shadow-2xl relative overflow-hidden group transition-all duration-300"
                  >
                    <span className="relative z-10">ADD YOUR NAME IN THE WAITLIST</span>
                    {/* Ripple effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: [0, 0.5, 0] }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="about" className="relative py-32 px-4 overflow-hidden">
        {/* Dark dramatic background (Primary Navy) for editorial impact */}
        <div className="absolute inset-0 bg-primary-dark" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Content with white text overlay */}
        <div className="relative max-w-7xl mx-auto z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <div className="w-16 h-1 bg-accent-gold mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif text-white">
                  What to Expect
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  2 and half days' intensive fun-filled experiential learning experience
                </p>
              </motion.div>
            </div>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {[
              { icon: "🎯", title: "Hands-on Experience", color: "#F39F5A" },
              { icon: "📚", title: "Thought Provoking Workbooks", color: "#F39F5A" },
              { icon: "🎉", title: "Entertainment Evenings", color: "#F39F5A" },
              { icon: "💡", title: "Innovative Insights", color: "#F39F5A" },
              { icon: "🎓", title: "Fun Way Learning", color: "#F39F5A" },
              { icon: "🔧", title: "Actionable Ideas", color: "#F39F5A" },
              { icon: "🎭", title: "Engaging Role Plays", color: "#F39F5A" },
              { icon: "🚀", title: "Cutting-edge Tools & Inputs", color: "#F39F5A" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <FeatureCard icon={feature.icon} title={feature.title} shadowColor={feature.color} darkMode />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-32 px-4 section-canvas relative overflow-hidden">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <SectionHeader
              title="Success by Numbers"
              subtitle="Proven track record of transforming dermatology practices across India"
            />
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              { value: 6, label: "Versions", suffix: "+" },
              { value: 582, label: "Dermapreneurs", suffix: "+" },
              { value: 187, label: "Hours of Content", suffix: "+" },
              { value: 161, label: "Expert Inputs", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={index === 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <FadeIn delay={index * 0.1}>
                  <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl hover:border-accent-gold transition-all duration-300">
                    <div className="text-5xl md:text-6xl font-bold text-primary-dark mb-4 font-serif">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-lg text-body font-semibold">{stat.label}</p>
                  </div>
                </FadeIn>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-32 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeader
              title="The Must-Attend Event"
              subtitle="An exclusive experience designed for growth-minded dermatologists"
            />
          </FadeIn>

          {/* Magazine Grid: 30% for numbers, 70% for description */}
          <div className="grid lg:grid-cols-10 gap-12 mb-16">
            {/* 30% column - Numbered list displayed vertically */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="space-y-8">
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
                      description:
                        "Restricted number of delegates to just like-minded and growth-minded dermatologists.",
                    },
                  ].map((item, index) => (
                    <FadeIn key={index} delay={0.3 + index * 0.1}>
                      <div className="border-l-4 border-primary-dark pl-6 py-2">
                        <div className="text-5xl font-bold text-primary-dark/20 mb-2 font-serif">{item.number}</div>
                        <h3 className="text-xl font-bold text-primary-dark mb-2 font-serif">{item.title}</h3>
                        <p className="text-body leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* 70% column - Main description text */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.3}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-body leading-relaxed text-lg mb-6">
                    Dermapreneur 2025 is an exclusive, invitation-only workshop designed for growth-driven
                    dermatologists, offering a 2.5-day immersive experience in practice management and entrepreneurship.
                    With tailored strategies, hands-on learning, and cutting-edge insights, it empowers participants to
                    elevate their practices and achieve measurable business growth.
                  </p>
                  <p className="text-body leading-relaxed text-lg mb-8">
                    Who isn't in the room is just as crucial as who is. That's why DERMAPRENEUR 2025 is an exclusive,
                    invitation-only workshop with strictly limited seats—reserved only for like-minded, growth-oriented
                    dermatologists ready to transform their practice.
                  </p>

                  {/* Quote Block */}
                  <div className="mt-12">
                    <QuoteBlock
                      quote="Delaying to learn marketing & practice management until your clinic becomes a top choice is like waiting to put on sunscreen only after you've got a sunburn."
                      author="Practice Management Wisdom"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="speakers" className="py-32 px-4 relative overflow-hidden bg-primary-dark">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <FloatingShapes />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <div className="w-16 h-1 bg-accent-gold mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif text-white">
                  Keynote Speaker
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Learn from the industry's leading expert in dermatology practice management
                </p>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Left side - Photo placeholder */}
                <div className="lg:col-span-2">
                  <div className="aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-lg border-2 border-accent-gold/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">👨‍⚕️</div>
                      <p className="text-sm text-white/60">Speaker Photo</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white mb-4 font-serif">Ilesh Khakhkhar</h3>
                    <div className="flex flex-wrap gap-2 text-sm mb-6">
                      <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full border border-accent-gold/30">
                        Leader
                      </span>
                      <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full border border-accent-gold/30">
                        Entrepreneur
                      </span>
                      <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full border border-accent-gold/30">
                        Marketer
                      </span>
                      <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full border border-accent-gold/30">
                        Keynote Speaker
                      </span>
                      <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full border border-accent-gold/30">
                        Author
                      </span>
                      <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full border border-accent-gold/30">
                        Certified Business Coach
                      </span>
                    </div>
                    <p className="text-lg text-white/90 mb-2">20+ years in Derma marketing</p>
                    <p className="text-lg text-white font-semibold mb-6">Trained 500+ Dermatologists</p>
                  </div>

                  <div className="space-y-4 text-white/90 leading-relaxed font-serif text-base">
                    <p>
                      Ilesh Khakhkhar is a renowned serial entrepreneur, practice management expert, and keynote speaker
                      with over 20 years of experience in dermatology marketing. As a John Maxwell Team Certified coach
                      and trainer, Ilesh has empowered 500+ dermatologists through his workshops, talks and conferences.
                    </p>
                    <p>
                      His expertise spans business strategy, patient acquisition, digital marketing, and operational
                      excellence specifically tailored for dermatology practices. Ilesh led the highly successful CDSI
                      AI BOOSTER workshop in 2024 and continues to drive innovation in dermatology practice management.
                    </p>
                    <p className="text-accent-gold font-semibold font-sans">
                      Ilesh will lead approximately 80% of the Dermapreneur 2025 sessions, sharing actionable insights
                      you can implement immediately in your practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 relative overflow-hidden section-sepia">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4F7] to-[#FBFBFB]" />

        {/* Subtle dotted grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #d8dce0 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0 }}
        />

        <StickyPromise />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <SectionHeader
              title="Pricing & Packages"
              subtitle="Choose the package that best suits your practice growth goals"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                name: "Package 1",
                price: "Rs. 1,21,000/-",
                priceNote: "(including GST)",
                occupancy: "Double occupancy",
                features: [
                  "Main sessions on Friday, Saturday and Sunday",
                  "Activities and exercises",
                  "Role plays and case studies",
                  "Thought-provoking workbooks",
                  "Networking opportunities",
                  "All meals and refreshments",
                  "Exclusive workshop materials",
                  "Certificate of participation",
                ],
                featured: false,
              },
              {
                name: "Package 2",
                price: "Rs. 1,51,000/-",
                priceNote: "(including GST)",
                occupancy: "Both single occupancy",
                features: [
                  "Main sessions on Friday, Saturday and Sunday",
                  "Activities and exercises",
                  "Role plays and case studies",
                  "Thought-provoking workbooks",
                  "Networking opportunities",
                  "All meals and refreshments",
                  "Exclusive workshop materials",
                  "Certificate of participation",
                ],
                featured: true,
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
                  animate={
                    pkg.featured
                      ? {
                          boxShadow: [
                            "0 20px 40px -12px rgba(30, 58, 138, 0.15)",
                            "0 25px 50px -12px rgba(30, 58, 138, 0.25)",
                            "0 20px 40px -12px rgba(30, 58, 138, 0.15)",
                          ],
                        }
                      : {}
                  }
                  transition={
                    pkg.featured
                      ? {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }
                      : { duration: 0.3 }
                  }
                  className="h-full"
                >
                  <Card
                    className={`${
                      pkg.featured
                        ? "border-4 border-primary-navy shadow-2xl scale-105"
                        : "border-2 border-gray-200 shadow-xl"
                    } hover:ring-2 hover:ring-accent-gold/50 transition-all duration-300 bg-white relative h-full`}
                  >
                    {pkg.featured && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-navy text-white px-4 py-1 rounded-full text-sm font-semibold">
                        RECOMMENDED
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                      <div className="text-4xl font-bold text-primary-navy font-serif">{pkg.price}</div>
                      <CardDescription className="text-sm">{pkg.priceNote}</CardDescription>
                      <CardDescription className="text-base font-semibold text-deep mt-2">
                        {pkg.occupancy}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-navy mr-2 font-bold">✓</span>
                            <span className="text-deep leading-relaxed">{feature}</span>
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
                              ? "bg-primary-navy hover:bg-primary-navy/90 text-white shadow-lg"
                              : "bg-white border-2 border-primary-navy text-primary-navy hover:bg-blue-50"
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

          <FadeIn delay={0.4}>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-primary-navy/20 shadow-lg">
                <div className="mb-6">
                  <p className="text-deep leading-relaxed text-base mb-4">
                    <span className="font-bold text-primary-navy">Additional Person Pricing:</span> If you wish to bring
                    an additional person (spouse/practice partner), the cost is Rs. 60,500/- (including GST). This
                    includes access to all sessions, meals, and materials but does not include accommodation.
                  </p>
                  <p className="text-deep leading-relaxed text-base">
                    <span className="font-bold text-primary-navy">Note:</span> For those opting for double occupancy, if
                    you don't have a roommate, we'll pair you with another attendee to ensure everyone gets the best
                    value.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-4 section-canvas">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeader title="What's Your Take…?" subtitle="Common objections and honest answers" />
          </FadeIn>

          <Accordion type="single" collapsible className="space-y-4 mb-16">
            {[
              {
                question: "I don't have time right now.",
                answer:
                  "That's precisely why you need this. The workshop is designed to give you systems and frameworks that will save you hours every week. Two and a half days now can save you months of trial and error later.",
              },
              {
                question: "I'm already doing well; I don't need this.",
                answer:
                  "Great! But imagine what 'even better' looks like. Dermapreneur isn't about fixing what's broken—it's about scaling what's already working and staying ahead of the competition.",
              },
              {
                question: "I can learn this on my own from books or online courses.",
                answer:
                  "You could. But here's the difference: this is tailored specifically for dermatologists, with real case studies, peer learning, and live feedback. It's the difference between theory and implementation.",
              },
              {
                question: "The investment is too high.",
                answer:
                  "Think of it this way: if you implement just one strategy that brings in 5 new patients a month, the ROI is immediate. Plus, we guarantee 3x value—or your money back.",
              },
              {
                question: "I'm not sure if this will work for my practice.",
                answer:
                  "We've worked with 500+ dermatologists with varying practice sizes and specialties. The frameworks are adaptable, and you'll learn how to customize them for your unique situation.",
              },
              {
                question: "I've attended workshops before, and they didn't help much.",
                answer:
                  "Most workshops are generic. Dermapreneur is hands-on, action-oriented, and dermatology-specific. You'll leave with a personalized action plan, not just notes you'll never look at again.",
              },
              {
                question: "What if I can't implement everything I learn?",
                answer:
                  "You don't have to. Even implementing 20% of what you learn can lead to significant growth. Plus, you'll have access to post-event support and resources.",
              },
              {
                question: "I don't like being away from my practice for 2.5 days.",
                answer:
                  "We get it. But think of it as an investment in your practice's future. Many attendees report that the clarity and strategies they gain help them work smarter, not harder, when they return.",
              },
              {
                question: "I'm skeptical about practice management workshops.",
                answer:
                  "Skepticism is healthy. That's why we offer a money-back guarantee. Attend, experience it, and if you don't feel it's worth it, we'll refund you—no questions asked.",
              },
              {
                question: "My team won't support this.",
                answer:
                  "Often, resistance comes from uncertainty. Share what you'll learn and how it will benefit the entire practice. Many attendees bring their team members to future events because of the results they see.",
              },
              {
                question: "I'm not ready for this level of commitment.",
                answer:
                  "Fair enough. But ask yourself: when will you be ready? Growth doesn't wait for the 'perfect time'—it happens when you decide to act. And we're here to make that decision easier with our guarantee.",
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
                    value={`objection-${index}`}
                    className="border border-gray-200 rounded-lg px-6 hover:border-accent-gold transition-colors duration-300 shadow-md"
                  >
                    <AccordionTrigger className="text-left font-semibold text-deep hover:text-primary-navy hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-deep/80 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              </FadeIn>
            ))}
          </Accordion>

          <FadeIn>
            <SectionHeader title="General FAQs" subtitle="Everything you need to know about Dermapreneur 2025" />
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
                  "The workshop fee includes main sessions on Friday, Saturday and Sunday, activities and exercises, role plays and case studies, thought-provoking workbooks, networking opportunities, all meals and refreshments, exclusive workshop materials, and certificate of participation.",
              },
              {
                question: "What is the refund policy?",
                answer:
                  "We offer a unique guarantee: if by the end of the 2.5 days, you don't feel the workshop has been worth every minute and penny, your investment is on us—no questions asked. However, due to the exclusive nature and limited seating, registrations are non-transferable except with prior approval.",
              },
              {
                question: "Where is the venue located?",
                answer:
                  "The event will be held at The Gift City Club, Gandhinagar (A member of Radisson individuals). The venue offers a professional, comfortable environment perfect for intensive learning and networking.",
              },
              {
                question: "Who is the main speaker?",
                answer:
                  "The keynote speaker is Ilesh Khakhkhar, a renowned serial entrepreneur and practice management expert with over 20 years of experience in dermatology marketing. Ilesh will lead approximately 80% of the sessions, bringing his expertise as a John Maxwell Team Certified coach who has trained 500+ dermatologists.",
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
                    value={`general-${index}`}
                    className="border border-gray-200 rounded-lg px-6 hover:border-accent-gold transition-colors duration-300 shadow-md"
                  >
                    <AccordionTrigger className="text-left font-semibold text-deep hover:text-primary-navy hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-deep/80 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </section>

      <SectionDivider />

      {/* Venue Section */}
      <section id="venue" className="py-32 px-4 section-sepia">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeader title="Venue" subtitle="The Gift City Club, Gandhinagar" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <TiltCard>
              <div className="bg-white border-2 border-gray-100 p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary-navy mb-2 font-serif">The Gift City Club</h3>
                  <p className="text-xl text-deep mb-4">Gandhinagar</p>
                  <p className="text-lg text-deep/70 italic">(A member of Radisson individuals)</p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-deep leading-relaxed text-lg mb-6">
                    Experience world-class facilities in the heart of Gujarat's premier financial district. The Gift
                    City Club offers a sophisticated, professional environment perfect for intensive learning and
                    meaningful networking.
                  </p>
                  <p className="text-deep leading-relaxed text-lg">
                    With state-of-the-art conference facilities, comfortable accommodations, and excellent dining
                    options, the venue is designed to ensure your complete focus on practice transformation without any
                    distractions.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <h4 className="text-xl font-bold text-primary-navy mb-4">Event Dates</h4>
                  <p className="text-2xl font-semibold text-deep">10-12 January, 2025</p>
                  <p className="text-lg text-deep/70 mt-2">Friday to Sunday | 2.5 days intensive workshop</p>
                </div>
              </div>
            </TiltCard>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-primary-navy">
        <div className="max-w-4xl mx-auto text-center text-white">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Get in Touch</h2>
            <p className="text-xl mb-12 text-white/90 leading-relaxed">
              Have questions or need more information? We're here to help you make the right decision for your
              practice's growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-white/80">+91 98765 43210</p>
              </motion.a>

              <motion.a
                href="mailto:info@dermapreneur.com"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-white/80">info@dermapreneur.com</p>
              </motion.a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <PremiumButton size="lg" className="bg-white text-primary-dark hover:bg-gray-100 text-lg px-12 py-6">
              Join the Waitlist
            </PremiumButton>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 font-serif">DERMAPRENEUR 2025</h3>
            <p className="text-gray-400">India's Premier Practice Management Workshop for Dermatologists</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </motion.a>
            <motion.a
              href="#speakers"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              Speaker
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </motion.a>
            <motion.a
              href="#faq"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              FAQ
            </motion.a>
            <motion.a
              href="#venue"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              Venue
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </motion.a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Dermapreneur. All rights reserved. | 10-12 January, 2025 | The Gift City Club, Gandhinagar
          </p>
        </div>
      </footer>
    </div>
  )
}
