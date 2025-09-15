"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              About Amplied Technologies
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              Your dedicated technology partner delivering enterprise-grade software development, cloud infrastructure, and cybersecurity solutions. We provide ongoing support, predictable costs, and the expertise you need to accelerate your digital transformation.
            </p>
          </div>
        </Section>

        {/* Company Story */}
        <Section background="surface">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#044078' }}>
                Our Story
              </h2>
              <p className="text-xl text-brand-secondary max-w-4xl mx-auto leading-relaxed" style={{ color: '#034078' }}>
                Founded with a vision to revolutionize how businesses access technology through our innovative Technology-as-a-Service (TaaS) model.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-4 text-brand-secondary leading-relaxed" style={{ color: '#034078' }}>
                  <p>
                    Unlike traditional consultancies that deliver one-off projects and disappear, we provide ongoing, subscription-based technology partnerships that evolve with your business. Our approach ensures continuous innovation, predictable costs, dedicated team availability, and proactive support.
                  </p>
                  <p>
                    Based in India and serving clients worldwide, we combine deep technical expertise with a partnership-first mindset to deliver solutions that not only meet today&apos;s needs but also continuously adapt to tomorrow&apos;s challenges.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-brand-secondary/20 overflow-hidden shadow-lg relative">
                  <Image 
                    src="/images/taas-concept.svg" 
                    alt="Technology as a Service Concept"
                    width={500}
                    height={400}
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Founder Section */}
        <Section background="light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#044078' }}>
                Meet Our Founder
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full mx-auto flex items-center justify-center overflow-hidden relative">
                    <Image 
                      src="/avatars/naveen.jpg" 
                      alt="Naveen Goswami - Founder & CEO"
                      width={256}
                      height={256}
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                
                <div className="space-y-6 text-center md:text-left">
                  <div>
                    <h3 className="text-3xl font-bold text-text mb-2" style={{ color: '#044078' }}>
                      Naveen Goswami
                    </h3>
                    <p className="text-xl text-brand-secondary" style={{ color: '#034078' }}>
                      Founder & CEO
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-brand-secondary leading-relaxed" style={{ color: '#034078' }}>
                    <p>
                      With over 22 years of experience in technology leadership and digital transformation, Naveen founded Amplied Technologies to bridge the gap between traditional consultancy and ongoing technology partnership.
                    </p>
                    <p>
                      His vision is to make enterprise-grade technology accessible to businesses of all sizes through our innovative TaaS model, ensuring continuous innovation, predictable costs, and dedicated team availability.
                    </p>
                    <p className="italic text-lg">
                      &ldquo;We believe technology should be an enabler, not a barrier. Our mission is to help businesses focus on what they do best while we handle their technology needs with excellence, reliability, and ongoing partnership.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <SiteFooter />
    </div>
  );
}
