"use client";

import { motion } from "framer-motion";

const technologies = [
  { 
    name: "AWS", 
    category: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#FF9900" d="M6.763 17.555c-.187 0-.306-.017-.357-.05v-3.235c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05zm0-4.763c-.187 0-.306-.017-.357-.05V9.507c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05zm0-4.763c-.187 0-.306-.017-.357-.05V4.744c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05z"/>
        <path fill="#FF9900" d="M12.5 17.555c-.187 0-.306-.017-.357-.05v-3.235c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05zm0-4.763c-.187 0-.306-.017-.357-.05V9.507c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05zm0-4.763c-.187 0-.306-.017-.357-.05V4.744c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05z"/>
        <path fill="#FF9900" d="M18.237 17.555c-.187 0-.306-.017-.357-.05v-3.235c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05zm0-4.763c-.187 0-.306-.017-.357-.05V9.507c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05zm0-4.763c-.187 0-.306-.017-.357-.05V4.744c.05-.033.17-.05.357-.05.187 0 .306.017.357.05v3.235c-.05.033-.17.05-.357.05z"/>
      </svg>
    )
  },
  { 
    name: "Azure", 
    category: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#0078D4" d="M12.5 2L2 7l10.5 5L23 7l-10.5-5zM2 17l10.5 5L23 17l-10.5-5L2 17z"/>
        <path fill="#0078D4" d="M2 12l10.5 5L23 12l-10.5-5L2 12z"/>
      </svg>
    )
  },
  { 
    name: "GCP", 
    category: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285F4" d="M12.5 2L2 7l10.5 5L23 7l-10.5-5z"/>
        <path fill="#34A853" d="M2 12l10.5 5L23 12l-10.5-5L2 12z"/>
        <path fill="#FBBC04" d="M12.5 22L2 17l10.5-5L23 17l-10.5 5z"/>
        <path fill="#EA4335" d="M12.5 12l-5-2.5L12.5 7l5 2.5-5 2.5z"/>
      </svg>
    )
  },
  { 
    name: "Kubernetes", 
    category: "Orchestration",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#326CE5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
        <circle fill="#326CE5" cx="12" cy="7" r="2"/>
        <circle fill="#326CE5" cx="12" cy="17" r="2"/>
      </svg>
    )
  },
  { 
    name: "Docker", 
    category: "Containerization",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V8.774a.186.186 0 00-.186-.186h-2.119v2.49zm-3.628 0h2.12v-2.49h-2.12v2.49zm-3.627 0h2.12v-2.49H6.728v2.49zm-3.628 0h2.12v-2.49H3.1v2.49zm7.255-3.628h2.12V4.96h-2.12v2.49zm-3.627 0h2.12V4.96H6.728v2.49zm-3.628 0h2.12V4.96H3.1v2.49zm-3.628 0h2.12V4.96H-.5v2.49zm7.255-3.628h2.12V1.332h-2.12v2.49zm-3.627 0h2.12V1.332H6.728v2.49zm-3.628 0h2.12V1.332H3.1v2.49zm-3.628 0h2.12V1.332H-.5v2.49z"/>
      </svg>
    )
  },
  { 
    name: "React", 
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle fill="#61DAFB" cx="12" cy="12" r="2"/>
        <path fill="none" stroke="#61DAFB" strokeWidth="2" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12s4.5-10 10-10z"/>
        <path fill="none" stroke="#61DAFB" strokeWidth="2" d="M12 2c3.5 0 6.5 2 8.5 5.5S19 15.5 15.5 17.5S8.5 15.5 6.5 12S8.5 4.5 12 2z"/>
        <path fill="none" stroke="#61DAFB" strokeWidth="2" d="M12 2c1.5 0 3 .5 4 1.5s1.5 2.5 1.5 4.5S17.5 13.5 16 14.5S13.5 15 12 15s-3.5-.5-4-1.5S6.5 11.5 6.5 9.5S8.5 4.5 12 2z"/>
      </svg>
    )
  },
  { 
    name: "Node.js", 
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#339933" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  { 
    name: "PostgreSQL", 
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        <path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  }
];

export default function TechStack() {
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
          Technology Stack
        </h2>
        <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#034078' }}>
          We leverage cutting-edge technologies to build robust, scalable, and secure solutions
        </p>
      </motion.div>

      {/* Scrolling animation container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: [0, -100 * technologies.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of technologies */}
          {technologies.map((tech, index) => (
            <motion.div
              key={`first-${tech.name}`}
              className="group text-center space-y-3 flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-16 h-16 mx-auto bg-white rounded-xl border border-brand-secondary/15 flex items-center justify-center group-hover:shadow-card transition-all duration-300 group-hover:scale-110">
                {/* Official tech icon */}
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  {tech.icon}
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-semibold text-text text-sm group-hover:text-brand-primary transition-colors duration-300" style={{ color: '#044078' }}>
                  {tech.name}
                </h3>
                <p className="text-xs text-brand-secondary" style={{ color: '#034078' }}>
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <motion.div
              key={`second-${tech.name}`}
              className="group text-center space-y-3 flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-16 h-16 mx-auto bg-white rounded-xl border border-brand-secondary/15 flex items-center justify-center group-hover:shadow-card transition-all duration-300 group-hover:scale-110">
                {/* Official tech icon */}
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  {tech.icon}
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-semibold text-text text-sm group-hover:text-brand-primary transition-colors duration-300" style={{ color: '#044078' }}>
                  {tech.name}
                </h3>
                <p className="text-xs text-brand-secondary" style={{ color: '#034078' }}>
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Additional info */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text mb-4" style={{ color: '#044078' }}>
            Always Up-to-Date
          </h3>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto" style={{ color: '#034078' }}>
            We continuously evaluate and adopt new technologies to ensure your solutions remain cutting-edge and secure.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
