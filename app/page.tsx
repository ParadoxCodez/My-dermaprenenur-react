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
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f9f9f9] to-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#1e40af] pt-20"
      >
        <div className="max-w-6xl mx-auto text-center text-white">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
                <p className="text-sm md:text-base font-semibold tracking-wide">
                  India's one and only INTENSIVE PRACTICE MANAGEMENT WORKSHOP
                </p>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif leading-tight">
                DERMAPRENEUR 2025
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90">Dedicated to Dermatologists</p>
              <p className="text-lg md:text-xl mb-12 text-white/80">
                10-12 January, 2025 | The Gift City Club, Radisson, Gandhinagar
              </p>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-12">
              <CountdownTimer targetDate={new Date("2025-01-10T09:00:00")} />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <PremiumButton size="lg" className="text-lg px-12 py-6">
              ADD YOUR NAME IN THE WAITLIST
            </PremiumButton>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* What to Expect Section */}
      <section id="about" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeader
              title="What to Expect"
              subtitle="2 and half days' intensive fun-filled experiential learning experience"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎯", title: "Hands-on Experience", color: "#1e3a8a" },
              { icon: "📚", title: "Thought Provoking Workbooks", color: "#2563eb" },
              { icon: "🎉", title: "Entertainment Evenings", color: "#3b82f6" },
              { icon: "💡", title: "Innovative Insights", color: "#60a5fa" },
              { icon: "🎓", title: "Fun Way Learning", color: "#1e3a8a" },
              { icon: "🔧", title: "Actionable Ideas", color: "#2563eb" },
              { icon: "🎭", title: "Engaging Role Plays", color: "#3b82f6" },
              { icon: "🚀", title: "Cutting-edge Tools & Inputs", color: "#60a5fa" },
            ].map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <FeatureCard icon={feature.icon} title={feature.title} shadowColor={feature.color} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Success Stats Section */}
      <section className="py-32 px-4 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 50, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-0.5 bg-white mx-auto mb-6"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                The Success Trail Of Previous Versions
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 6, suffix: "+", label: "Successful Versions" },
              { number: 582, suffix: "+", label: "Delighted Dermapreneurs" },
              { number: 187, suffix: "+", label: "Hours of Knowledge Delivered" },
              { number: 161, suffix: "+", label: "Insightful & Practical Inputs Delivered" },
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <TiltCard className="text-center">
                  <div className="p-10 bg-white">
                    <div className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-2">
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} duration={2} />
                    </div>
                    <div className="text-lg text-gray-600">{stat.label}</div>
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeader
              title="The Must-Attend Event"
              subtitle="An exclusive experience designed for growth-minded dermatologists"
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                <TiltCard className="h-full">
                  <div className="p-8 bg-white border-2 border-gray-100 h-full">
                    <div className="text-5xl font-bold text-[#1e3a8a]/20 mb-4 font-serif">{item.number}</div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 font-serif">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <QuoteBlock
              quote="Delaying to learn marketing & practice management until your clinic becomes a top choice is like waiting to put on sunscreen only after you've got a sunburn."
              author="Practice Management Wisdom"
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Dermapreneur 2025 is an exclusive, invitation-only workshop designed for growth-driven dermatologists,
                offering a 2.5-day immersive experience in practice management and entrepreneurship. With tailored
                strategies, hands-on learning, and cutting-edge insights, it empowers participants to elevate their
                practices and achieve measurable business growth.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Who isn't in the room is just as crucial as who is. That's why DERMAPRENEUR 2025 is an exclusive,
                invitation-only workshop with strictly limited seats—reserved only for like-minded, growth-oriented
                dermatologists ready to transform their practice.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Speakers Section */}
      <section id="speakers" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeader
              title="Keynote Speaker"
              subtitle="Learn from the industry's leading expert in dermatology practice management"
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-5xl mx-auto">
              <TiltCard>
                <div className="bg-white border-2 border-gray-100 p-12 text-center">
                  <div className="mb-8">
                    <h3 className="text-4xl font-bold text-[#1e3a8a] mb-4 font-serif">Ilesh Khakhkhar</h3>
                    <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-6">
                      <span className="px-4 py-2 bg-blue-50 rounded-full">Leader</span>
                      <span className="px-4 py-2 bg-blue-50 rounded-full">Entrepreneur</span>
                      <span className="px-4 py-2 bg-blue-50 rounded-full">Marketer</span>
                      <span className="px-4 py-2 bg-blue-50 rounded-full">Keynote Speaker</span>
                      <span className="px-4 py-2 bg-blue-50 rounded-full">Author</span>
                      <span className="px-4 py-2 bg-blue-50 rounded-full">Certified Business Coach</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-2">20+ years in Derma marketing</p>
                    <p className="text-lg text-gray-700 font-semibold">Trained 500+ Dermatologists</p>
                  </div>

                  <div className="text-left space-y-4 text-gray-700 leading-relaxed">
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
                    <p className="text-[#1e3a8a] font-semibold">
                      Ilesh will lead approximately 80% of the Dermapreneur 2025 sessions, sharing actionable insights
                      you can implement immediately in your practice.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
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
                      <CardDescription className="text-sm">{pkg.priceNote}</CardDescription>
                      <CardDescription className="text-base font-semibold text-gray-700 mt-2">
                        {pkg.occupancy}
                      </CardDescription>
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

          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <TiltCard>
                <div className="bg-white border-2 border-gray-100 p-10">
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 font-serif text-center">Additional Options</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-800 mb-2">Extra Person (Package 1)</p>
                      <p className="text-3xl font-bold text-[#1e3a8a]">Rs. 30,000/-</p>
                      <p className="text-sm text-gray-600">(including GST) per person</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-800 mb-2">Extra Person (Package 2)</p>
                      <p className="text-3xl font-bold text-[#1e3a8a]">Rs. 40,000/-</p>
                      <p className="text-sm text-gray-600">(including GST) per person</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-8">
                    <h4 className="text-xl font-bold text-[#1e3a8a] mb-4">MY PROMISE TO YOU</h4>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      I guarantee that you'll receive at least{" "}
                      <span className="font-bold text-[#1e3a8a]">3x the value</span> of what you've put in. And if, by
                      the end of the 2.5 days, you don't feel it's been worth every minute and penny, then your{" "}
                      <span className="font-bold text-[#1e3a8a]">investment is on me—no questions asked.</span>
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-4">
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

      <SectionDivider />

      {/* Venue Section */}
      <section id="venue" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeader title="Venue" subtitle="The Gift City Club, Gandhinagar" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <TiltCard>
              <div className="bg-white border-2 border-gray-100 p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-[#1e3a8a] mb-2 font-serif">The Gift City Club</h3>
                  <p className="text-xl text-gray-600 mb-4">Gandhinagar</p>
                  <p className="text-lg text-gray-500 italic">(A member of Radisson individuals)</p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Experience world-class facilities in the heart of Gujarat's premier financial district. The Gift
                    City Club offers a sophisticated, professional environment perfect for intensive learning and
                    meaningful networking.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    With state-of-the-art conference facilities, comfortable accommodations, and excellent dining
                    options, the venue is designed to ensure your complete focus on practice transformation without any
                    distractions.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <h4 className="text-xl font-bold text-[#1e3a8a] mb-4">Event Dates</h4>
                  <p className="text-2xl font-semibold text-gray-800">10-12 January, 2025</p>
                  <p className="text-lg text-gray-600 mt-2">Friday to Sunday | 2.5 days intensive workshop</p>
                </div>
              </div>
            </TiltCard>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-[#1e3a8a]">
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
            <PremiumButton size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 text-lg px-12 py-6">
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
