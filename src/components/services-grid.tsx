"use client";

import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Gamepad2, 
  Lightbulb, 
  Monitor, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "End-to-end software solutions built with modern technologies, from concept to deployment and ongoing maintenance.",
    features: ["Full-Stack Development", "Mobile Applications", "API Development", "Legacy Modernization"],
    gradient: "from-blue-500/10 via-purple-500/5 to-cyan-500/10",
    iconGradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description: "Scalable cloud solutions with automated deployment pipelines and infrastructure management for optimal performance.",
    features: ["AWS/Azure/GCP", "Container Orchestration", "CI/CD Pipelines", "Infrastructure as Code"],
    gradient: "from-cyan-500/10 via-sky-500/5 to-blue-500/10",
    iconGradient: "from-cyan-500 to-sky-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services including threat assessment, compliance management, and 24/7 monitoring.",
    features: ["Security Audits", "Compliance (SOC2, ISO)", "Penetration Testing", "Incident Response"],
    gradient: "from-red-500/10 via-pink-500/5 to-rose-500/10",
    iconGradient: "from-red-500 to-pink-600"
  },
  {
    icon: Monitor,
    title: "Technology-as-a-Service (TaaS)",
    description: "Dedicated technology partnership with ongoing support, predictable costs, and continuous improvement.",
    features: ["Dedicated Team", "Predictable Costs", "Ongoing Support", "Regular Improvements"],
    gradient: "from-indigo-500/10 via-blue-500/5 to-purple-500/10",
    iconGradient: "from-indigo-500 to-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "Strategic technology consulting to modernize your business processes and accelerate digital adoption.",
    features: ["Technology Strategy", "Process Optimization", "Digital Roadmap", "Change Management"],
    gradient: "from-yellow-500/10 via-orange-500/5 to-red-500/10",
    iconGradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: Gamepad2,
    title: "Data Analytics & AI",
    description: "Intelligent data solutions and AI-powered insights to drive business growth and operational efficiency.",
    features: ["Data Engineering", "Machine Learning", "Business Intelligence", "Predictive Analytics"],
    gradient: "from-green-500/10 via-emerald-500/5 to-teal-500/10",
    iconGradient: "from-green-500 to-emerald-600"
  }
];

// Individual Service Card Component
function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const Icon = service.icon;
  const router = useRouter();
  const pathname = usePathname();

  const handleLearnMore = () => {
    const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    
    if (pathname === '/services') {
      // If on services page, scroll to the detailed section
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ 
          
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
          
        });
      }
    } else {
      // If on homepage, navigate to services page with hash
      router.push(`/services#${serviceId}`);
    }
  };

  const handleHover = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.05,
      rotateY: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };

  const handleLeave = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={handleHover}
      onHoverEnd={handleLeave}
      className="group"
    >
      <motion.div
        animate={controls}
        className="h-full"
      >
        <Card className="h-full relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm group-hover:bg-white/95 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10">
          {/* Animated background gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          

          <CardContent className="relative p-8 space-y-6 z-10">
            {/* Icon with simplified animation */}
            <div className={`w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-3xl flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-brand-primary/25 transition-all duration-300`}>
              <Icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#044078] group-hover:text-brand-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="leading-relaxed text-[#034078] group-hover:text-[#034078] transition-colors duration-300">
                {service.description}
              </p>
            </div>

            {/* Simplified features list */}
            <div className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center space-x-3 text-[#034078] text-sm group-hover:text-brand-primary transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action button */}
            <div className="pt-4">
              <button
                onClick={handleLearnMore}
                className="flex items-center space-x-2 text-brand-primary font-semibold text-sm group-hover:text-brand-secondary transition-colors duration-300 cursor-pointer hover:translate-x-1"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <div className="space-y-16">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-text leading-[1.3] inline-block"
          whileInView={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, #0a1128 0%, #034078 50%, #1282a2 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            paddingBottom: "0.1em", 
          }}
        >
          Technology-as-a-Service Solutions
        </motion.h2>
        <motion.p 
          className="text-xl max-w-3xl mx-auto text-[#034078]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive technology solutions with ongoing support, predictable costs, and the expertise to drive your digital transformation.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
