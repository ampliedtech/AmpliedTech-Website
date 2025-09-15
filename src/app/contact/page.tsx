import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import ContactForm from "@/components/contact-form";
import CTABand from "@/components/cta-band";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@ampliedtech.com",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    description: "Call us during business hours"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    description: "Serving clients worldwide"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "24/7 Support",
    description: "Always here to help"
  }
];

const faqs = [
  {
    question: "What is Technology-as-a-Service (TaaS)?",
    answer: "TaaS is our subscription-based model that provides ongoing technology services instead of one-off consultancy projects. You get continuous support, regular updates, and dedicated resources for a predictable monthly cost."
  },
  {
    question: "How is TaaS different from traditional consultancy?",
    answer: "Traditional consultancy delivers projects and leaves. TaaS provides ongoing partnership with continuous support, regular improvements, predictable costs, and dedicated team availability. It's like having an in-house tech team without the overhead."
  },
  {
    question: "What's included in your TaaS offering?",
    answer: "Our TaaS includes development, maintenance, monitoring, support, updates, security management, and strategic guidance. Everything you need to keep your technology running smoothly and growing with your business."
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer: "We work with businesses of all sizes - from startups to enterprise clients. Our flexible engagement models allow us to scale our services based on your needs and budget."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies (React, Node.js, Python), cloud platforms (AWS, Azure, GCP), DevOps tools (Docker, Kubernetes), databases (PostgreSQL, MongoDB), and cybersecurity solutions."
  },
  {
    question: "How quickly can you start a project?",
    answer: "We can typically start new projects within 1-2 weeks after initial consultation. For urgent requirements, we can expedite the process and begin work within days."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Contact Us
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              Ready to transform your business with our Technology-as-a-Service? Let&apos;s discuss how we can help you achieve your goals through ongoing partnership.
            </p>
          </div>
        </Section>

        {/* Contact Form */}
        <Section background="surface">
          <ContactForm />
        </Section>

        {/* Contact Info */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-text" style={{ color: '#044078' }}>
                Get in Touch
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#034078' }}>
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="text-center space-y-4 p-6 bg-white rounded-2xl border border-brand-secondary/15 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text mb-2" style={{ color: '#044078' }}>
                        {info.title}
                      </h3>
                      <p className="text-lg text-brand-primary font-semibold mb-2">
                        {info.value}
                      </p>
                      <p className="text-brand-secondary text-sm" style={{ color: '#034078' }}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section background="surface">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-text" style={{ color: '#044078' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#034078' }}>
                Common questions about our Technology-as-a-Service model
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-brand-secondary/15 p-8"
                >
                  <h3 className="text-xl font-bold text-text mb-4" style={{ color: '#044078' }}>
                    {faq.question}
                  </h3>
                  <p className="text-brand-secondary leading-relaxed" style={{ color: '#034078' }}>
                    {faq.answer}
                  </p>
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
