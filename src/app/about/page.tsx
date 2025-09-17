"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import Image from "next/image";
import { motion } from 'framer-motion';

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
                    Unlike traditional consultancies that deliver <strong>one-off projects</strong> and disappear, we provide ongoing, <strong>subscription-based technology partnerships</strong> that evolve with your business. Our approach ensures <strong>continuous innovation, predictable costs, dedicated team availability,</strong> and <strong>proactive support</strong>.
                  </p>
                  <p>
                    Based in India and serving clients worldwide, we combine deep technical expertise with a <strong>partnership-first mindset</strong> to deliver solutions that not only meet today&apos;s needs but also continuously adapt to tomorrow&apos;s challenges.
                  </p>
                </div>
              </div>

              <div className="relative">
  <div className="w-full h-96 bg-gradient-to-br from-gray-50 drop-shadow-2xl to-gray-100 rounded-2xl border border-brand-secondary/20 overflow-hidden shadow-lg relative hover:shadow-2xl hover:scale-110 transition-transform duration-500">
    <Image 
      src="/images/story.png" 
      alt="Technology as a Service Concept"
      fill
      className="object-cover hover:scale-110 transition-transform duration-500"
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
                <div className="space-y-6 text-center p-6">
                  
                <motion.div>
  <div className="relative group">
    <div className="w-full 
                    max-w-xs     /* Mobile */
                    sm:max-w-sm /* Small tablets */
                    md:max-w-md /* Tablets */
                    lg:max-w-lg /* Laptops */
                    xl:max-w-xl /* Large screens */
                    aspect-square mx-auto relative overflow-hidden">
      
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#034078] to-[#044078] rounded-2xl  opacity-30 group-hover:opacity-50 transition-opacity duration-500"><div className="blur-3xl"></div></div>

      {/* Main container with glass effect */}
      <div className="relative w-full h-full 
                      bg-gradient-to-br from-[#034078]/10 to-[#044078]/10 
                      rounded-2xl border border-white/20 
                      p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center overflow-hidden
                      group-hover:bg-white/20 transition-all duration-500">
        
        {/* <div className="w-full h-full bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center relative overflow-hidden"> */}
          {/* Profile image */}
          <img 
            src="/images/naveen_img.png"
            alt="Profile"
            className="w-48 h-48   /* mobile */
                       sm:w-60 sm:h-60   /* tablet */
                       md:w-60 md:h-60   /* bigger tablet */
                       lg:w-84 lg:h-84  /* laptop */
                       xl:w-110 xl:h-110   /* large desktop */
                       object-cover rounded-full 
                       group-hover:scale-105 transition-transform duration-500"
          />

          {/* Animated accent circles */}
          <div className="absolute top-2 right-2 
                          sm:top-4 sm:right-4 
                          w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 
                          bg-gradient-to-br from-[#044078] to-[#034078] 
                          rounded-full animate-bounce"></div>

          <div className="absolute bottom-4 left-4 
                          w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 
                          bg-gradient-to-br from-[#044078] to-[#034078] 
                          rounded-full animate-bounce"></div>

         
        {/* </div> */}
      </div>
    </div>
  </div>
</motion.div>


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
                      With over <strong>22 years of experience</strong> in technology leadership and digital transformation, <strong>Naveen</strong> founded <strong>Amplied Technologies</strong> to bridge the gap between traditional consultancy and ongoing technology partnership.
                    </p>
                    <p>
                      His vision is to make <strong>enterprise-grade technology</strong> accessible to businesses of all sizes through our <strong>innovative TaaS model, ensuring continuous innovation, predictable costs, and dedicated team availability</strong>.
                    </p>
                    <p className="italic text-lg">
                      <strong>&ldquo; </strong>I believe technology should be an enabler, not a barrier. Our mission is to help businesses focus on what they do best while we handle their technology needs with excellence, reliability, and ongoing partnership.<strong>&rdquo;</strong>
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
