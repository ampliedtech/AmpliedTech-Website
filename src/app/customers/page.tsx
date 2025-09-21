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
    company: "Spotlight",
    industry: "Live Streaming Platform",
    challenge: "Faced infrastructure bottlenecks and high costs while trying to scale live streaming platform to support growing viewer base with real-time event streaming needs",
    solution: "Deployed cloud-native microservices architecture with auto-scaling capabilities, real-time optimization, and comprehensive monitoring for seamless live streaming",
    results: [
      "99.9% uptime with zero streaming interruptions",
      "50% reduction in infrastructure costs through optimization",
      "3x faster streaming performance and lower latency",
      "Seamless scaling to handle 500K+ concurrent viewers"
    ],
    logo: "/logos/spotlight.svg"
  },
  {
    company: "Shephertz Technologies",
    industry: "Product-Based Company",
    challenge: "Needed reliable technology backbone for diverse product ecosystem including Backend-as-a-Service, MBaaS, and AI monitoring tools with continuous innovation and zero downtime",
    solution: "Established 7-year Technology-as-a-Service partnership providing dedicated team, ongoing support, and continuous innovation across entire product portfolio",
    results: [
      "7 years of continuous product innovation and growth",
      "Zero downtime across all products and platforms",
      "40% faster feature delivery with dedicated team",
      "99.95% SLA maintained with proactive monitoring"
    ],
    logo: "/logos/shephertz.png"
  },
  {
    company: "Witzeal Technologies",
    industry: "Gaming Platform",
    challenge: "Required robust, scalable infrastructure to support massive growth from startup to 50+ million users across 20+ games while ensuring fair play and regulatory compliance",
    solution: "Implemented comprehensive Technology-as-a-Service model with dedicated gaming infrastructure team, real-time optimization, and security compliance",
    results: [
      "Successfully scaled to 50+ million users across platforms",
      "60% improvement in game performance and user experience",
      "Zero-downtime deployments during peak gaming hours",
      "50% cost savings through infrastructure optimization"
    ],
    logo: "/logos/witzeal.svg"
  },
  {
    company: "Teeoff Technologies",
    industry: "Artificial Intelligence",
    challenge: "Needed specialized AI and machine learning expertise to develop cutting-edge computer vision algorithms and AR technologies for immersive user experiences",
    solution: "Provided dedicated Technology-as-a-Service team with AI/ML expertise, advanced algorithm development, and scalable AI infrastructure",
    results: [
      "Advanced computer vision and AR capabilities delivered",
      "Predictable monthly costs with dedicated team model",
      "Dedicated AI team always available for innovation",
      "Continuous updates with latest AI/ML technologies"
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

        {/* Success Stories */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold" style={{
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.company}
                  className="bg-white  rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Header with Logo and Company Info */}
                  <div className="p-8  mt-5 pb-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-text/90 rounded-xl flex items-center justify-center shadow-lg">
                        <Image 
                          src={study.logo} 
                          alt={`${study.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-brand-primary mb-1" style={{ color: "#034078" }}>
                          {study.company}
                        </h3>
                        <p className="text-lg text-brand-secondary font-medium" style={{ color: "#044078" }}>
                          {study.industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-8 space-y-6">
                    {/* Challenge */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="text-lg font-semibold text-brand-primary" style={{ color: "#034078" }}>Challenge</h4>
                      </div>
                      <p className="text-brand-secondary leading-relaxed pl-4" style={{ color: "#044078" }}>
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" style={{ color: "#034078" }}></div>
                        <h4 className="text-lg font-semibold text-brand-primary" style={{ color: "#034078" }}>Solution</h4>
                      </div>
                      <p className="text-brand-secondary leading-relaxed pl-4" style={{ color: "#044078" }}>
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <h4 className="text-lg font-semibold text-brand-primary" style={{ color: "#034078" }}>Results</h4>
                      </div>
                      <ul className="space-y-2 pl-4">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2.5 flex-shrink-0" />
                            <span className="text-brand-secondary text-sm leading-relaxed" style={{ color: "#044078" }}>{result}</span>
                          </li>
                        ))}
                      </ul>
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
