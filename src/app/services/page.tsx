"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import ServicesGrid from "@/components/services-grid";
import CTABand from "@/components/cta-band";
import { useEffect } from "react";

// Function to get service-specific animated visuals
function getServiceVisual(serviceTitle: string) {
  switch (serviceTitle) {
    case "Software Development":
      return (
        <div className="relative w-full h-full">
          {/* Code editor mockup */}
          <div className="absolute inset-4 bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-6 bg-gray-700 flex items-center px-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-3 space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xs">1</span>
                <span className="text-green-400 text-xs">function</span>
                <span className="text-yellow-300 text-xs">buildApp</span>
                <span className="text-white text-xs">()</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xs">2</span>
                <span className="text-white text-xs">  return</span>
                <span className="text-orange-400 text-xs">&quot;Amazing!&quot;</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xs">3</span>
                <span className="text-white text-xs">{'}'}</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
          {/* Floating elements */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      );
    
    case "Game Development":
      return (
        <div className="relative w-full h-full">
          {/* Game scene mockup */}
          <div className="absolute inset-4 bg-gradient-to-b from-sky-300 to-green-300 rounded-lg overflow-hidden">
            {/* Sky elements */}
            <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            
            {/* Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-400"></div>
            
            {/* Character */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full"></div>
            </div>
            
            {/* Collectibles */}
            <div className="absolute top-8 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-12 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      );
    
    case "IT Consulting & Strategy":
      return (
        <div className="relative w-full h-full">
          {/* Strategy dashboard */}
          <div className="absolute inset-4 bg-white rounded-lg shadow-lg p-3">
            {/* Header */}
            <div className="h-4 bg-blue-100 rounded mb-2 flex items-center px-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-blue-800 ml-2">Strategy Dashboard</span>
            </div>
            
            {/* Charts */}
            <div className="space-y-2">
              <div className="flex items-end space-x-1 h-8">
                <div className="w-2 bg-green-400 rounded-t animate-pulse" style={{ height: '60%' }}></div>
                <div className="w-2 bg-blue-400 rounded-t animate-pulse" style={{ height: '80%', animationDelay: '200ms' }}></div>
                <div className="w-2 bg-purple-400 rounded-t animate-pulse" style={{ height: '40%', animationDelay: '400ms' }}></div>
                <div className="w-2 bg-orange-400 rounded-t animate-pulse" style={{ height: '90%', animationDelay: '600ms' }}></div>
              </div>
              
              <div className="flex space-x-1">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Status indicators */}
            <div className="absolute bottom-2 right-2 flex space-x-1">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
              <div className="w-1 h-1 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '500ms' }}></div>
            </div>
          </div>
        </div>
      );
    
    case "Managed IT Services":
      return (
        <div className="relative w-full h-full">
          {/* Server monitoring interface */}
          <div className="absolute inset-4 bg-gray-800 rounded-lg p-3">
            {/* Server status */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-green-400 text-xs">Server 1</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-400 text-xs">Server 2</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 text-xs">Database</span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
            </div>
            
            {/* Network activity */}
            <div className="mt-3 space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
            
            {/* Uptime indicator */}
            <div className="absolute bottom-2 left-2 right-2">
              <div className="h-1 bg-gray-600 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-pulse" style={{ width: '99.9%' }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    
    case "Cybersecurity & Compliance":
      return (
        <div className="relative w-full h-full">
          {/* Security shield with monitoring */}
          <div className="absolute inset-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center">
            <div className="relative">
              {/* Shield */}
              <div className="w-16 h-16 border-4 border-red-500 rounded-t-full rounded-b-lg flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-red-500 rounded-t-full rounded-b-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Security indicators */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
              
              {/* Threat detection lines */}
              <div className="absolute inset-0">
                <div className="absolute top-2 left-2 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
                <div className="absolute top-4 right-2 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '500ms' }}></div>
                <div className="absolute bottom-2 left-4 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    
    case "Cloud Services & DevOps":
      return (
        <div className="relative w-full h-full">
          {/* Cloud infrastructure diagram */}
          <div className="absolute inset-4 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg p-3">
            {/* Cloud shapes */}
            <div className="relative">
              <div className="w-12 h-6 bg-white rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-2 left-2 w-8 h-4 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="absolute top-1 right-2 w-6 h-3 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '400ms' }}></div>
            </div>
            
            {/* Connection lines */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-4 bg-blue-400 animate-pulse"></div>
            </div>
            
            {/* Server nodes */}
            <div className="absolute bottom-4 left-2 w-3 h-3 bg-blue-500 rounded animate-bounce"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="absolute bottom-4 right-2 w-3 h-3 bg-blue-500 rounded animate-bounce" style={{ animationDelay: '400ms' }}></div>
            
            {/* Data flow indicators */}
            <div className="absolute top-6 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-6 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '300ms' }}></div>
          </div>
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
                    <div className="w-full h-80 rounded-2xl border border-brand-secondary/20 flex items-center justify-center relative overflow-hidden bg-white shadow-lg">
                      {/* Service-specific animated content */}
                      <div className="text-center space-y-4 relative z-10 w-full h-full">
                        {getServiceVisual(service.title)}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <p className="text-brand-secondary text-lg font-medium bg-white/90 px-3 py-1 rounded-full shadow-sm">
                            {/* {service.title} */}
                          </p>
                        </div>
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
