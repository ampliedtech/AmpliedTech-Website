"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import ServicesGrid from "@/components/services-grid";
import CTABand from "@/components/cta-band";
import { useEffect } from "react";
import Image from "next/image";

// Function to get service-specific animated visuals
function getServiceVisual(serviceTitle: string) {
  switch (serviceTitle) {
    case "Custom Software Development":
      return (
        <div className="relative w-full h-full">
          <Image 
            src="/images/software-development.svg" 
            alt="Custom Software Development"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      );
    
    case "Data Analytics & AI":
      return (
        <div className="relative w-full h-full">
          <Image 
            src="/images/data-analytics-and-ai.svg" 
            alt="Data Analytics & AI"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      );
    
    case "Digital Transformation":
      return (
        <div className="relative w-full h-full">
          <Image 
            src="/images/digital-transformation.svg" 
            alt="Digital Transformation"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      );
    
    case "Technology-as-a-Service (TaaS)":
      return (
        <div className="relative w-full h-full">
          <Image 
            src="/images/taas-concept.svg" 
            alt="Technology as a Service"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      );
    
    case "Cybersecurity Solutions":
      return (
        <div className="relative w-full h-full">
          <Image 
            src="/images/cybersecurity-solutions.svg" 
            alt="Cybersecurity Solutions"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      );
    
    case "Cloud Infrastructure & DevOps":
      return (
        <div className="relative w-full h-full">
          <Image 
            src="/images/cloud-infrastructure-and-devops.svg" 
            alt="Cloud Infrastructure & DevOps"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      );
    
    default:
      return (
        <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 bg-brand-primary rounded-lg animate-bounce"></div>
        </div>
      );
  }
}

const detailedServices = [
  {
    title: "Custom Software Development",
    description: "We build scalable, secure applications using modern technologies and agile methodologies. Our ongoing development process ensures continuous improvement and rapid delivery with dedicated team support.",
    features: [
      "Full-stack web and mobile applications",
      "Microservices architecture design",
      "API development and integration",
      "Database design and optimization",
      "Ongoing code review and quality assurance",
      "Continuous integration and deployment",
      "Regular feature updates and maintenance"
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"]
  },
  {
    title: "Data Analytics & AI",
    description: "Transform your data into actionable insights with our comprehensive data analytics and AI solutions. We provide ongoing data management, analysis, and AI model development to drive business intelligence.",
    features: [
      "Data engineering and pipeline development",
      "Machine learning model development",
      "Business intelligence dashboards",
      "Predictive analytics solutions",
      "Data visualization and reporting",
      "Ongoing model optimization and updates"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Tableau"]
  },
  {
    title: "Digital Transformation",
    description: "Strategic technology planning embedded in ongoing execution to drive your digital transformation. We help you make informed decisions about your technology investments with continuous guidance.",
    features: [
      "Technology strategy development",
      "Process optimization and automation",
      "Legacy system modernization",
      "Digital roadmap planning",
      "Change management support",
      "Ongoing strategic guidance"
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Ansible"]
  },
  {
    title: "Technology-as-a-Service (TaaS)",
    description: "Our flagship offering providing ongoing technology partnership with predictable costs, dedicated team availability, and continuous innovation. Focus on your business while we handle your technology needs.",
    features: [
      "Dedicated technology team",
      "Predictable monthly costs",
      "Ongoing support and maintenance",
      "Regular technology updates",
      "Proactive monitoring and optimization",
      "Continuous improvement and innovation"
    ],
    technologies: ["Full Stack", "Cloud Platforms", "DevOps", "Security", "Monitoring", "AI/ML"]
  },
  {
    title: "Cybersecurity Solutions",
    description: "Continuous threat monitoring and compliance management to protect your business and data. Stay secure and compliant with our comprehensive security services and ongoing protection.",
    features: [
      "Security assessment and auditing",
      "Threat detection and response",
      "Compliance management (SOC2, ISO)",
      "Penetration testing",
      "Incident response planning",
      "Ongoing security monitoring"
    ],
    technologies: ["SIEM", "EDR", "WAF", "VPN", "PKI", "Security Frameworks"]
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Seamless cloud migration, automation, and rapid deployment for faster time-to-market. Modernize your infrastructure with our cloud and DevOps expertise and ongoing optimization.",
    features: [
      "Cloud migration and optimization",
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Container orchestration",
      "Monitoring and logging",
      "Ongoing cost optimization"
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"]
  }
];

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash navigation when coming from homepage
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }, 100); // Small delay to ensure page is fully loaded
        }
      }
    };

    // Run on mount and when hash changes
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Our Services
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto"  >
              From custom software development to cloud infrastructure and cybersecurity — we provide comprehensive technology solutions with ongoing partnership and support.
            </p>
          </div>
        </Section>

        {/* Services Overview */}
        <Section background="surface">
          <ServicesGrid />
        </Section>

        {/* Detailed Services */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#044078' }}>
                Detailed Service Offerings
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#034078' }}>
                Explore our comprehensive range of Technology-as-a-Service offerings designed to grow with your business
              </p>
            </div>

            <div className="space-y-12">
              {detailedServices.map((service, index) => (
                <div
                  key={service.title}
                  id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ color: '#034078' }}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl font-bold text-text" style={{ color: '#044078' }}>
                      {service.title}
                    </h3>
                    <p className="text-lg text-brand-secondary leading-relaxed" style={{ color: '#034078' }}>
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-text" style={{ color: '#044078' }}>What we deliver:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3" style={{ color: '#034078' }}>
                            <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-brand-secondary" style={{ color: '#034078' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-text">Technologies we use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-full h-80 rounded-2xl border border-brand-secondary/20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
                      {/* Service-specific animated content */}
                      <div className="w-full h-full relative">
                        {getServiceVisual(service.title)}
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
