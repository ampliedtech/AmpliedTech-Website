import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";

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
              Your Partner in Digital Growth. We deliver secure, scalable, and innovative technology-as-a-service to help businesses worldwide accelerate their digital transformation.
            </p>
          </div>
        </Section>

        {/* Company Story */}
        <Section background="surface">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-text" style={{ color: '#044078' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-brand-secondary leading-relaxed" style={{ color: '#034078' }}>
                <p>
                  Amplied Technologies LLP was founded with a simple yet powerful vision: to democratize access to world-class technology solutions through our innovative Technology-as-a-Service (TaaS) model.
                </p>
                <p>
                  Unlike traditional consultancies that deliver one-off projects and disappear, we provide ongoing, subscription-based technology services that grow with your business. Our approach ensures continuous innovation, predictable costs, and dedicated support.
                </p>
                <p>
                  Based in India and serving clients worldwide, we combine deep technical expertise with a client-first mindset to deliver solutions that not only meet today&apos;s needs but also prepare you for tomorrow&apos;s challenges.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl border border-brand-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-brand-primary/30 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg"></div>
                  </div>
                  <p className="text-brand-secondary text-lg font-medium" style={{ color: '#034078' }}>
                    Technology as a Service
                  </p>
                  <p className="text-brand-secondary/70 text-sm" style={{ color: '#034078' }}>
                    Not Consultancy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Founder Section */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold text-text" style={{ color: '#044078' }}>
                Meet Our Founder
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-brand-primary font-bold text-4xl">NG</span>
                  </div>
                </div>
                
                <div className="space-y-6 text-left">
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
                      With over 15 years of experience in technology leadership and digital transformation, Naveen founded Amplied Technologies to bridge the gap between traditional consultancy and ongoing technology partnership.
                    </p>
                    <p>
                      His vision is to make enterprise-grade technology accessible to businesses of all sizes through our innovative TaaS model, ensuring continuous innovation and predictable costs.
                    </p>
                    <p>
                      &ldquo;We believe technology should be an enabler, not a barrier. Our mission is to help businesses focus on what they do best while we handle their technology needs with excellence and reliability.&rdquo;
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
