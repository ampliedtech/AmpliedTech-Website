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
        
        {/* Floating tech icons */}
        <motion.div
          className="absolute top-20 left-10 text-cyan-400/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code className="h-8 w-8" />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 text-blue-400/20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Cloud className="h-10 w-10" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-16 text-cyan-400/15"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Shield className="h-6 w-6" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-32 text-blue-400/15"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Database className="h-7 w-7" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-24 text-cyan-400/20"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Cpu className="h-8 w-8" />
        </motion.div>

        <motion.div
          className="absolute bottom-3/10 left-384 text-cyan-400/20"
          animate={{
            y: [0, -25, 0],
            x: [0, -18, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Cpu className="h-8 w-8" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-16 text-blue-400/15"
          animate={{
            y: [0, 18, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Network className="h-9 w-9" />
        </motion.div>
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Floating data particles */}
        {Array.from({ length: 12 }).map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const positions = [
            { left: 10, top: 20 }, { left: 25, top: 5 }, { left: 40, top: 35 },
            { left: 60, top: 15 }, { left: 75, top: 45 }, { left: 85, top: 25 },
            { left: 15, top: 60 }, { left: 35, top: 80 }, { left: 55, top: 70 },
            { left: 80, top: 65 }, { left: 5, top: 40 }, { left: 90, top: 85 }
          ];
          const pos = positions[i] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + (i * 0.2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          );
        })}
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
            <motion.h1
              className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="text-white"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                Innovate.
              </motion.span>{" "}
              <motion.span 
                className="text-cyan-400"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(34,211,238,0)",
                    "0 0 30px rgba(34,211,238,0.5)",
                    "0 0 0px rgba(34,211,238,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                Protect.
              </motion.span>{" "}
              <motion.span 
                className="text-white"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                Grow.
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.
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
              <motion.div 
                className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/20 transition-colors duration-300"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(34,211,238,0)",
                    "0 0 20px rgba(34,211,238,0.3)",
                    "0 0 0px rgba(34,211,238,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-10 w-10 text-cyan-400" />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Innovate</h3>
              <p className="text-slate-400">Cutting-edge technology solutions that drive innovation and competitive advantage.</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/20 transition-colors duration-300"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(34,211,238,0)",
                    "0 0 20px rgba(34,211,238,0.3)",
                    "0 0 0px rgba(34,211,238,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield className="h-10 w-10 text-cyan-400" />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Protect</h3>
              <p className="text-slate-400">Enterprise-grade security and compliance to safeguard your digital assets.</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/20 transition-colors duration-300"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(34,211,238,0)",
                    "0 0 20px rgba(34,211,238,0.3)",
                    "0 0 0px rgba(34,211,238,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TrendingUp className="h-10 w-10 text-cyan-400" />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Grow</h3>
              <p className="text-slate-400">Scalable solutions that grow with your business and accelerate digital transformation.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
