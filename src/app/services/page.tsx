"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import ServicesGrid from "@/components/services-grid";
import HowItWorks from "@/components/how-it-works";
import CTABand from "@/components/cta-band";
import { useEffect } from "react";
import Image from "next/image";

// Standardized Responsive Service Visual Components
function CustomSoftwareVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/sde.jpg"
        alt="Custom Software"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function DataAnalyticsVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/analyst.png"
        alt="Data Analytics"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function DigitalTransformationVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/digital.png"
        alt="Digital Transformation"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function TaaSVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/service.png"
        alt="TaaS"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function CybersecurityVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/cyber.png"
        alt="Cybersecurity"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function CloudInfrastructureVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/cloud.png"
        alt="Cloud Infrastructure"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

// Function to get service-specific visuals
function getServiceVisual(serviceTitle: string) {
  switch (serviceTitle) {
    case "Custom Software Development":
      return <CustomSoftwareVisual />;
    case "Data Analytics & AI":
      return <DataAnalyticsVisual />;
    case "Digital Transformation":
      return <DigitalTransformationVisual />;
    case "Technology-as-a-Service (TaaS)":
      return <TaaSVisual />;
    case "Cybersecurity Solutions":
      return <CybersecurityVisual />;
    case "Cloud Infrastructure & DevOps":
      return <CloudInfrastructureVisual />;
    default:
      return (
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 bg-brand-primary rounded-lg animate-bounce"></div>
        </div>
      );
  }
}

const detailedServices = [
  {
    title: "Custom Software Development",
    description:
      "We build scalable, secure applications using modern technologies and agile methodologies. Our ongoing development process ensures continuous improvement and rapid delivery with dedicated team support.",
    features: [
      "Full-stack web and mobile applications",
      "Microservices architecture design",
      "API development and integration",
      "Database design and optimization",
      "Ongoing code review and quality assurance",
      "Continuous integration and deployment",
      "Regular feature updates and maintenance",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
    ],
  },
  {
    title: "Data Analytics & AI",
    description:
      "Transform your data into actionable insights with our comprehensive data analytics and AI solutions. We provide ongoing data management, analysis, and AI model development to drive business intelligence.",
    features: [
      "Data engineering and pipeline development",
      "Machine learning model development",
      "Business intelligence dashboards",
      "Predictive analytics solutions",
      "Data visualization and reporting",
      "Ongoing model optimization and updates",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "Scikit-learn",
      "Tableau",
    ],
  },
  {
    title: "Digital Transformation",
    description:
      "Strategic technology planning embedded in ongoing execution to drive your digital transformation. We help you make informed decisions about your technology investments with continuous guidance.",
    features: [
      "Technology strategy development",
      "Process optimization and automation",
      "Legacy system modernization",
      "Digital roadmap planning",
      "Change management support",
      "Ongoing strategic guidance",
    ],
    technologies: ["Strategy Planning", "Process Automation", "Change Management", "Digital Roadmap", "Business Intelligence", "Agile Methodologies"],
  },
  {
    title: "Technology-as-a-Service (TaaS)",
    description:
      "Our flagship offering providing ongoing technology partnership with predictable costs, dedicated team availability, and continuous innovation. Focus on your business while we handle your technology needs.",
    features: [
      "Dedicated technology team",
      "Predictable monthly costs",
      "Ongoing support and maintenance",
      "Regular technology updates",
      "Proactive monitoring and optimization",
      "Continuous improvement and innovation",
    ],
    technologies: [
      "Custom Software Development",
      "Cloud Infrastructure & DevOps",
      "Cybersecurity Solutions",
      "Data Analytics & AI",
      "Digital Transformation",
      "Ongoing Support",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Continuous threat monitoring and compliance management to protect your business and data. Stay secure and compliant with our comprehensive security services and ongoing protection.",
    features: [
      "Security assessment and auditing",
      "Threat detection and response",
      "Compliance management (SOC2, ISO)",
      "Penetration testing",
      "Incident response planning",
      "Ongoing security monitoring",
    ],
    technologies: ["SIEM", "EDR", "WAF", "VPN", "PKI", "Security Frameworks"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Seamless cloud migration, automation, and rapid deployment for faster time-to-market. Modernize your infrastructure with our cloud and DevOps expertise and ongoing optimization.",
    features: [
      "Cloud migration and optimization",
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Container orchestration",
      "Monitoring and logging",
      "Ongoing cost optimization",
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
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
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              From custom software development to cloud infrastructure and
              cybersecurity — we provide comprehensive technology solutions with
              ongoing partnership and support.
            </p>
          </div>
        </Section>

        {/* Services Overview */}
        <Section background="surface">
          <ServicesGrid />
        </Section>

        {/* how it works */}
        <Section id="how-it-works" className="bg-[#eaecf0]">
          <HowItWorks />
        </Section>

        {/* Detailed Services */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2
                className="text-4xl lg:text-5xl font-bold text-text"
                style={{ color: "#044078" }}
              >
                Detailed Service Offerings
              </h2>
              <p
                className="text-xl text-brand-secondary max-w-3xl mx-auto"
                style={{ color: "#034078" }}
              >
                Explore our comprehensive range of Technology-as-a-Service
                offerings designed to grow with your business
              </p>
            </div>

            <div className="space-y-16">
              {detailedServices.map((service, index) => (
                <div
                  key={service.title}
                  id={service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/&/g, "and")}
                  className="max-w-6xl mx-auto"
                  style={{ color: "#034078" }}
                >
                  <div className="text-center space-y-8 mb-12">
                    <h3
                      className="text-4xl lg:text-4xl font-bold text-text"
                      style={{ color: "#044078" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xl text-brand-secondary max-w-4xl mx-auto leading-relaxed"
                      style={{ color: "#034078" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-4">
                          <h4
                            className="text-2xl font-semibold text-text"
                            style={{ color: "#044078" }}
                          >
                            What we deliver:
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start space-x-3"
                                style={{ color: "#034078" }}
                              >
                                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                                <span
                                  className="text-brand-secondary"
                                  style={{ color: "#034078" }}
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4
                            className="text-2xl font-semibold text-text"
                            style={{ color: "#044078" }}
                          >
                            Our Expertise:
                          </h4>
                          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {service.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="relative w-full aspect-[16/9] rounded-2xl border border-brand-secondary/20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
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
