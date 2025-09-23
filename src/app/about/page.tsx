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
              Founded on the principle that exceptional talent should be instantly accessible, we've revolutionized how businesses scale their technology capabilities through our innovative Talent as a Service model.
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
              <p className="text-2xl text-brand-secondary max-w-4xl mx-auto leading-relaxed" style={{ color: '#034078' }}>
                Founded with a vision to revolutionize how businesses access talent through our innovative Talent as a Service (TaaS) model.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-4 text-xl text-brand-secondary leading-relaxed text-justify" style={{ color: '#034078' }}>
                  <p>
                    Unlike traditional consultancies that deliver <strong>one-off projects</strong> and disappear, we provide ongoing, <strong>subscription-based talent partnerships</strong> that evolve with your business. Our approach ensures <strong>instant access to expert teams for development and infrastructure management, predictable costs, scalable talent solutions,</strong> and <strong>specialized expertise</strong>.
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
      alt="Talent as a Service Concept"
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
                    max-w-sm     /* Mobile */
                    sm:max-w-md /* Small tablets */
                    md:max-w-md /* Tablets */
                    lg:max-w-lg /* Laptops */
                    xl:max-w-xl /* Large screens */
                    aspect-square mx-auto relative overflow-hidden">
      
      {/* Glowing gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#034078] to-[#044078] rounded-full  opacity-50 group-hover:opacity-60 transition-opacity duration-500"><div className=""></div></div> */}

      {/* Main container with glass effect */}
      <div className="relative w-full h-full 
                     
                      p-2 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center overflow-hidden
                      group-hover: transition-all duration-500">
        
      
          {/* Profile image */}
          <div className="p-[18px] rounded-full bg-gradient-to-br from-[#034078]/80 to-[#044078]  group-hover:scale-102  tansition-trasform duration-500">
  <img 
    src="/images/naveen_bg.png"
    alt="Profile"
    className="w-48 h-48   /* mobile */
               sm:w-48 sm:h-48   /* tablet */
               md:w-48 md:h-48   /* bigger tablet */
               lg:w-70 lg:h-70  /* laptop */
               xl:w-94 xl:h-94   /* large desktop */
               object-cover rounded-full 
               group-hover:scale-105 transition-transform duration-500"
  />
</div>


          {/* Animated accent circles */}
          {/* <div className="absolute top-2 right-2 
                          sm:top-4 sm:right-4 
                          w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 
                          bg-gradient-to-br from-[#044078] to-[#034078] 
                          rounded-full animate-bounce"></div>

          <div className="absolute bottom-4 left-4 
                          w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 
                          bg-gradient-to-br from-[#044078] to-[#034078] 
                          rounded-full animate-bounce"></div> */}

         
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
                    <p className="text-2xl text-brand-secondary" style={{ color: '#034078' }}>
                      Founder & CEO
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-xl text-brand-secondary leading-relaxed text-justify" style={{ color: '#034078' }}>
                    <p>
                      With over <strong>22 years of experience</strong> in technology leadership and digital transformation, <strong>Naveen</strong> founded <strong>Amplied Technologies</strong> to bridge the gap between traditional consultancy and ongoing technology partnership.
                    </p>
                    <p>
                      His vision is to make <strong>enterprise-grade talent</strong> accessible to businesses of all sizes through our <strong>innovative TaaS model, ensuring instant access to expert teams for development and infrastructure management, predictable costs, and scalable talent solutions</strong>.
                    </p>
                    <p className="italic text-lg">
                      <strong>&ldquo; </strong>I believe talent should be accessible instantly, not a barrier. Our mission is to help businesses focus on what they do best while we provide instant access to expert teams with excellence, reliability, and ongoing partnership.<strong>&rdquo;</strong>
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
