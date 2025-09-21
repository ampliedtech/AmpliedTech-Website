"use client";

import { motion } from "framer-motion";
import { 
  Handshake, 
  Search, 
  Rocket, 
  RefreshCw,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: Handshake,
    title: "Partnership Setup",
    description: "We establish a dedicated technology partnership, understanding your goals and setting up our ongoing collaboration framework.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Search,
    title: "Discovery & Planning",
    description: "Comprehensive analysis of your current technology landscape and creation of a strategic roadmap for digital transformation.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Rapid development and deployment of your technology solutions using modern tools and agile methodologies.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: RefreshCw,
    title: "Ongoing Partnership",
    description: "Ongoing support, monitoring, and continuous improvement to ensure your technology evolves with your business needs.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

export default function HowItWorks() {
  return (
    <div className="space-y-20">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full">
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wide">Our Approach</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-text" style={{ color: '#044078' }}>
          How We Partner With You
        </h2>
        <p className="text-xl  max-w-4xl mx-auto leading-relaxed" style={{ color: '#034078' }}>
          Your trusted technology partner for enterprise software, cloud infrastructure, and cybersecurity. We deliver Technology-as-a-Service with ongoing support, predictable costs, and the expertise to drive your digital transformation.
        </p>
      </motion.div>

      <div className="relative">
        {/* Flowing background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-emerald-50 via-purple-50 to-orange-50 rounded-3xl opacity-50" />
        
        {/* Main container with flowing design */}
        <div className="relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-xl" />
          
          <div className="relative px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                
                return (
                  <motion.div
                    key={step.title}
                    className="relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Step number with gradient background */}
                    <div className="flex items-center justify-center mb-8">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm" />
                      </div>
                    </div>

                    {/* Icon with animated background */}
                    <motion.div 
                      className="flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        <Icon className={`h-10 w-10 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <div className="h-16 flex items-center justify-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-text group-hover:text-brand-primary transition-colors duration-300 whitespace-nowrap sm:whitespace-nowrap" style={{ color: '#044078' }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-brand-secondary leading-relaxed text-base" style={{ color: '#034078' }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Flowing connector arrow */}
                    {!isLast && (
                      <div className="hidden lg:block absolute top-8 -right-4 z-10">
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-6 h-6 text-brand-secondary/60" />
                        </motion.div>
                      </div>
                    )}

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-16">
              <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-emerald-200 via-purple-200 to-orange-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 via-purple-500 to-orange-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
