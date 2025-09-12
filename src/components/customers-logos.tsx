"use client";

import { motion } from "framer-motion";
import { Star, Award, TrendingUp, Clock, Shield, CheckCircle } from "lucide-react";

const customers = [
  {
    name: "YappyApps",
    logo: "/logos/yappyapps.png",
    description: "Mobile App Development",
    industry: "Technology",
    testimonial: "Amplied delivered exceptional mobile solutions that exceeded our expectations.",
    rating: 5,
    projectType: "Mobile Development"
  },
  {
    name: "Shephertz Technologies",
    logo: "/logos/shephertz.png", 
    description: "Cloud Infrastructure",
    industry: "Cloud Services",
    testimonial: "Their cloud expertise helped us scale our infrastructure seamlessly.",
    rating: 5,
    projectType: "Cloud Migration"
  },
  {
    name: "Witzeal Technologies",
    logo: "/logos/witzeal.png",
    description: "Gaming Solutions",
    industry: "Gaming",
    testimonial: "Innovative gaming solutions that gave us a competitive edge in the market.",
    rating: 5,
    projectType: "Gaming Platform"
  },
  {
    name: "Wealthians",
    logo: "/logos/wealthians.png",
    description: "Fintech Platform",
    industry: "Financial Technology",
    testimonial: "Secure and scalable fintech solutions that our users trust completely.",
    rating: 5,
    projectType: "Fintech Development"
  }
];

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: CheckCircle,
    description: "Successfully completed projects across various industries"
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    icon: Shield,
    description: "Reliable infrastructure with enterprise-grade availability"
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Clock,
    description: "Round-the-clock technical support and maintenance"
  }
];

export default function CustomersLogos() {
  return (
    <div className="space-y-20">
      {/* Header Section */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Award className="h-4 w-4" />
          <span>Trusted Partners</span>
        </motion.div>
        
        <h2 className="text-4xl lg:text-6xl font-bold text-text" style={{ color: '#044078' }}>
          Trusted by Industry{" "}
          <motion.span
            className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Leaders
          </motion.span>
        </h2>
        
        <p className="text-xl text-brand-secondary max-w-4xl mx-auto leading-relaxed" style={{ color: '#034078' }}>
          We&apos;re proud to partner with innovative companies across various industries, 
          delivering cutting-edge solutions that drive digital transformation and business growth.
        </p>
      </motion.div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ color: '#044078' }}>
        {customers.map((customer, index) => (
          <motion.div
            key={customer.name}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="relative bg-white rounded-3xl border border-brand-secondary/10 p-8 h-full flex flex-col items-center text-center space-y-6 group-hover:shadow-2xl group-hover:border-brand-primary/20 transition-all duration-500">
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                initial={false}
              />
              
              {/* Logo container with enhanced styling */}
              <motion.div
                className="relative w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-brand-primary font-bold text-2xl">
                  {customer.name.charAt(0)}
                </span>
                
                {/* Floating particles on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              
              {/* Company info */}
              <div className="space-y-3 flex-1 flex flex-col justify-center relative z-10">
                <h3 className="font-bold text-lg text-text group-hover:text-brand-primary transition-colors duration-300" style={{ color: '#044078' }}>
                  {customer.name}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-brand-secondary" style={{ color: '#034078' }}>
                    {customer.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(customer.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-500 uppercase tracking-wide" style={{ color: '#034078' }}>
                    {customer.industry}
                  </p>
                </div>
              </div>
              
              {/* Testimonial quote - always visible */}
              <div className="w-full relative z-10">
                <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-xl p-4 mt-4">
                  <p className="text-xs text-brand-secondary italic leading-relaxed" style={{ color: '#034078' }}>
                    &ldquo;{customer.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Stats Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-secondary/5 rounded-3xl" />
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center space-y-4 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-shadow duration-300"
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <div className="space-y-2">
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-brand-primary"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-text" style={{ color: '#044078' }}>
                    {stat.label}
                  </div>
                  <p className="text-sm text-brand-secondary max-w-xs mx-auto" style={{ color: '#034078' }}>
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-text mb-4" style={{ color: '#044078' }}>
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-brand-secondary mb-6" style={{ color: '#034078' }}>
            Let&apos;s discuss how we can help accelerate your digital transformation journey.
          </p>
          <motion.div
            className="inline-flex items-center space-x-2 text-brand-primary font-semibold"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>Get Started Today</span>
            <TrendingUp className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
