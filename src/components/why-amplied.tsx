"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = {
  traditional: {
    title: "Traditional Consultancy",
    features: [
      "Projects end, support stops",
      "High upfront investment",
      "6-12 month ramp-up time",
      "Reactive support only",
      "Technology becomes outdated",
      "Team changes between projects",
      "No ongoing optimization",
      "Unpredictable costs"
    ]
  },
  taas: {
    title: "Amplied TaaS Model",
    features: [
      "Ongoing partnership & support",
      "Predictable monthly investment",
      "2-4 week rapid deployment",
      "Proactive monitoring & maintenance",
      "Continuous technology updates",
      "Dedicated team always available",
      "Regular performance optimization",
      "Transparent, fixed pricing"
    ]
  }
};

export default function WhyAmplied() {
  return (
    <div className="space-y-16">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#044078' }}>
          Why Choose Amplied?
        </h2>
        <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#034078' }}>
          Experience the difference between traditional consultancy and our ongoing Technology-as-a-Service partnership
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traditional Consultancy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-red-200 hover:border-red-300 transition-colors duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                  <X className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-text" style={{ color: '#044078' }}>
                  {comparisonData.traditional.title}
                </h3>
              </div>

              <div className="space-y-3">
                {comparisonData.traditional.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-brand-secondary" style={{ color: '#034078' }}>
                  
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology-as-a-Service */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-brand-primary/30 hover:border-brand-primary/50 transition-colors duration-300 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text" style={{ color: '#044078' }}>
                  {comparisonData.taas.title}
                </h3>
              </div>

              <div className="space-y-3">
                {comparisonData.taas.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-brand-secondary" style={{ color: '#034078' }}
                  >
                    <Check className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text mb-4" style={{ color: '#044078' }}>
            Ready to Transform Your Technology?
          </h3>
          <p className="text-brand-secondary text-lg mb-6" style={{ color: '#034078' }}>
            Join forward-thinking businesses that have embraced our Technology-as-a-Service model for predictable costs, ongoing support, and continuous innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-textd rounded-xl font-semibold hover:brightness-110 transition-all duration-300"
            >
              Start Your Partnership
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-brand-secondary text-brand-secondary rounded-xl font-semibold hover:bg-brand-secondary/10 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
