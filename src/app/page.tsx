import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import HowItWorks from "@/components/how-it-works";
import WhyAmplied from "@/components/why-amplied";
import CustomersLogos from "@/components/customers-logos";
import Testimonials from "@/components/testimonials";
import TechStack from "@/components/tech-stack";
import CTABand from "@/components/cta-band";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        <Hero />
        
        <Section id="services" background="surface">
          <ServicesGrid />
        </Section>
        
        <Section id="how-it-works" background="light">
          <HowItWorks />
        </Section>
        
        <Section background="surface">
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
