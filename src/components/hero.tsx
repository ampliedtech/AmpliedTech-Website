"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, TrendingUp, Code, Cloud, Database, Cpu, Network } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Simplified floating tech icons - reduced from 7 to 3 for better performance */}
        <motion.div
          className="absolute top-20 left-10 text-cyan-400/20"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code className="h-6 w-6" />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 text-blue-400/20"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Cloud className="h-8 w-8" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-16 text-blue-400/15"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Network className="h-7 w-7" />
        </motion.div>
        
        {/* Static gradient orbs for better performance */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white">Build.</span>{" "}
              <span className="text-cyan-400">Secure.</span>{" "}
              <span className="text-white">Scale.</span>
            </h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your trusted technology partner for enterprise software, cloud infrastructure, and cybersecurity. We deliver Technology-as-a-Service with ongoing support, predictable costs, and the expertise to drive your digital transformation.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:border-slate-300 px-12 py-6 rounded-md backdrop-blur-sm transition-all duration-300 font-medium"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Explore Services</span>
              </Link>
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
            <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/20 transition-colors duration-300">
              <Zap className="h-10 w-10 text-cyan-400" />
            </div>
              <h3 className="text-xl font-semibold text-white">Build</h3>
              <p className="text-slate-400">Custom software development and digital solutions tailored to your business needs.</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
            <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/20 transition-colors duration-300">
              <Shield className="h-10 w-10 text-cyan-400" />
            </div>
              <h3 className="text-xl font-semibold text-white">Secure</h3>
              <p className="text-slate-400">Comprehensive cybersecurity solutions and compliance to protect your business.</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
            <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/20 transition-colors duration-300">
              <TrendingUp className="h-10 w-10 text-cyan-400" />
            </div>
              <h3 className="text-xl font-semibold text-white">Scale</h3>
              <p className="text-slate-400">Cloud infrastructure and DevOps solutions that scale with your business growth.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
