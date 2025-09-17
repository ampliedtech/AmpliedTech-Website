import dynamic from "next/dynamic";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import HowItWorks from "@/components/how-it-works";
import WhyAmplied from "@/components/why-amplied";
import Section from "@/components/section";

// Lazy load heavy components with optimized loading states
const CustomersLogos = dynamic(() => import("@/components/customers-logos"), {
  loading: () => <div className="h-96 bg-gray-100/50 rounded-lg" />,
});

const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <div className="h-96 bg-gray-100/50 rounded-lg" />,
});

const TechStack = dynamic(() => import("@/components/tech-stack"), {
  loading: () => <div className="h-64 bg-gray-100/50 rounded-lg" />,
});

const CTABand = dynamic(() => import("@/components/cta-band"), {
  loading: () => <div className="h-32 bg-gray-100/50 rounded-lg" />,
});

export default function Home() {
  return (
    <div className="min-h-screen ">
      <SiteHeader />
      
      <main>
        <Hero />
        
        <Section id="services" background="surface">
          <ServicesGrid />
        </Section>
        
        <Section id="how-it-works" background="light">
          <HowItWorks />
        </Section>
        
        <Section background="surface" className="bg-gray-100">
          <WhyAmplied />
        </Section>
        
        <Section background="light">
          <CustomersLogos />
        </Section>
        
        <Section background="seamless">
          <Testimonials />
        </Section>
        
        <Section id="tech-stack" background="light">
          <TechStack />
        </Section>
        
        <CTABand />
      </main>
      
      <SiteFooter />
    </div>
  );
}
