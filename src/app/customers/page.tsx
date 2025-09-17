"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import CustomersLogos from "@/components/customers-logos";
import Testimonials from "@/components/testimonials";
import CTABand from "@/components/cta-band";
import Image from "next/image";

const caseStudies = [
  {
    company: "Spotlight Streaming",
    industry: "Live Streaming Platform",
    challenge: "Needed to scale their live streaming infrastructure to handle 100K+ concurrent viewers",
    solution: "Implemented cloud-native architecture with auto-scaling and microservices for real-time streaming",
    results: [
      "99.9% uptime achieved",
      "50% reduction in infrastructure costs",
      "3x faster streaming performance",
      "Seamless scaling to 500K+ concurrent viewers"
    ],
    logo: "/logos/spotlight.svg"
  },
  {
    company: "Shephertz Technologies",
    industry: "Product-Based Technology Company",
    challenge: "Required ongoing technology support for diverse product suite spanning 15 years",
    solution: "Provided comprehensive TaaS partnership supporting Backend-as-a-Service, MBaaS, and AI monitoring tools",
    results: [
      "Continuous product innovation",
      "Zero downtime across all products",
      "40% faster feature delivery",
      "99.95% SLA maintained across all platforms"
    ],
    logo: "/logos/shephertz.png"
  },
  {
    company: "Witzeal Technologies",
    industry: "Real Money Gaming Platform",
    challenge: "Needed to scale to 50+ million users across 20+ games while maintaining robust infrastructure",
    solution: "Implemented comprehensive TaaS model with dedicated team and continuous optimization",
    results: [
      "Scaled to 50+ million users",
      "60% improvement in game performance",
      "Zero-downtime deployments",
      "50% cost savings through optimization"
    ],
    logo: "/logos/witzeal.svg"
  },
  {
    company: "Teeoff Technologies",
    industry: "AI Solutions Company",
    challenge: "Required ongoing partnership to develop cutting-edge AI and AR technologies",
    solution: "Provided dedicated TaaS team for AI development, AR implementation, and continuous innovation",
    results: [
      "Advanced AI and AR capabilities",
      "Predictable development costs",
      "Dedicated team always available",
      "Continuous technology updates"
    ],
    logo: "/logos/teeoff_large.png"
  }
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Our Customers
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              We&apos;re proud to partner with forward-thinking companies across diverse industries, providing ongoing technology support that drives digital transformation and sustainable growth.
            </p>
          </div>
        </Section>

        {/* Customer Logos */}
        <Section background="surface">
          <CustomersLogos />
        </Section>

        {/* Testimonials */}
        <Section background="seamless">
          <Testimonials />
        </Section>

        {/* Case Studies */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#044078] " style={{
            background: "linear-gradient(90deg, #0a1128 0%, #034078 50%, #1282a2 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            paddingBottom: "0.1em", 
          }}>
                Success Stories
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
                Discover how we&apos;ve helped our clients achieve remarkable results through our ongoing Technology-as-a-Service partnerships
              </p>
            </div>

            <div className="space-y-16 px-4 sm:px-6 lg:px-8">
  {caseStudies.map((study, index) => (
    <div key={study.company} className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-8 mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-6 space-y-4 sm:space-y-0">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
            <Image
              src={study.logo}
              alt={`${study.company} logo`}
              width={64}
              height={64}
              className="object-contain p-2"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary">
              {study.company}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-left text-[#034078]">
              {study.industry}
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center ">
        {/* Text Section */}
        <div className={`space-y-6 bg-gray-100 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 ${index % 2 === 1 ? "md:order-2" : ""}`}>
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h4 className="text-xl sm:text-2xl font-semibold text-brand-primary">
                Challenge:
              </h4>
              <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl sm:text-2xl font-semibold text-brand-primary">
                Solution:
              </h4>
              <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
                {study.solution}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl sm:text-2xl font-semibold text-brand-primary">
                Results:
              </h4>
              <ul className="space-y-3">
                {study.results.map((result, resultIndex) => (
                  <li
                    key={resultIndex}
                    className="flex items-start space-x-3 text-sm sm:text-base"
                  >
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-brand-secondary">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
          <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl drop-shadow-2xl border border-brand-secondary/20 overflow-hidden shadow-lg relative hover:scale-105 transition-transform duration-500">
            <Image
              src={`/images/${study.company.toLowerCase().replace(/\s+/g, "-")}.png`}
              alt={`${study.company} - ${study.industry}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
        </Section>

        

        <CTABand />
      </main>
      
      <SiteFooter />
    </div>
  );
}
