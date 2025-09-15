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
              <h2 className="text-4xl lg:text-5xl font-bold text-text">
                Success Stories
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
                Discover how we&apos;ve helped our clients achieve remarkable results through our ongoing Technology-as-a-Service partnerships
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={study.company}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-xl flex items-center justify-center">
                        <span className="text-brand-primary font-bold text-xl">
                          {study.company.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text">
                          {study.company}
                        </h3>
                        <p className="text-brand-secondary">
                          {study.industry}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-text mb-2">Challenge:</h4>
                        <p className="text-brand-secondary">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-text mb-2">Solution:</h4>
                        <p className="text-brand-secondary">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-text mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-brand-secondary">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-brand-secondary/20 overflow-hidden shadow-lg relative">
                      <Image 
                        src={`/images/${study.company.toLowerCase().replace(/\s+/g, '-')}.svg`}
                        alt={`${study.company} - ${study.industry}`}
                        fill
                        className="object-contain p-4"
                        priority
                      />
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
