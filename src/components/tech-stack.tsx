"use client";

import { motion } from "framer-motion";

const technologies = [
  // Cloud Platforms
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
  
  // Containerization & Orchestration
  { 
    name: "Docker", 
    category: "Containers",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V8.774a.186.186 0 00-.186-.186h-2.119v2.49zm-3.628 0h2.12v-2.49h-2.12v2.49zm-3.627 0h2.12v-2.49H6.728v2.49zm-3.628 0h2.12v-2.49H3.1v2.49zm7.255-3.628h2.12V4.96h-2.12v2.49zm-3.627 0h2.12V4.96H6.728v2.49zm-3.628 0h2.12V4.96H3.1v2.49zm-3.628 0h2.12V4.96H-.5v2.49zm7.255-3.628h2.12V1.332h-2.12v2.49zm-3.627 0h2.12V1.332H6.728v2.49zm-3.628 0h2.12V1.332H3.1v2.49zm-3.628 0h2.12V1.332H-.5v2.49z"/>
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
  
  // Frontend Technologies
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
    name: "Next.js", 
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#000000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.274.135.582.274.924.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 1.717.631c.574.12 1.137.18 1.69.18.3 0 .573-.025.819-.074.246-.05.466-.123.66-.218a1.94 1.94 0 0 0 .51-.357c.135-.143.24-.304.314-.483a1.467 1.467 0 0 0 .111-.566c0-.238-.062-.443-.186-.614a1.382 1.382 0 0 0-.51-.412 3.946 3.946 0 0 0-.744-.315 8.59 8.59 0 0 0-.902-.246 9.877 9.877 0 0 1-1.08-.321 4.33 4.33 0 0 1-.926-.493 3.033 3.033 0 0 1-.717-.753 2.451 2.451 0 0 1-.41-1.012c-.1-.405-.15-.857-.15-1.357 0-.657.125-1.21.373-1.656a3.033 3.033 0 0 1 1.012-1.085 4.38 4.38 0 0 1 1.487-.596c.566-.12 1.163-.18 1.79-.18z"/>
      </svg>
    )
  },
  
  // Backend Technologies
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
    name: "Python", 
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#3776AB" d="M14.25.18l.9.2.73.26.59.3.45.34.34.36.25.34.16.3.1.26.04.2.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.21.36-.16.37-.12.36-.09.34-.06.31-.04.27-.02.22-.01.17v3.06H3.17l-.01-.12-.02-.25-.05-.37-.09-.48-.14-.58-.2-.66-.26-.73-.33-.78-.4-.82-.48-.84-.56-.85-.65-.84-.74-.82-.84-.78-.94-.73-1.04-.67-.15-.1-.14-.15-.13-.2-.12-.24-.11-.28-.1-.31-.09-.34-.08-.36-.07-.38-.06-.39-.05-.4-.04-.4-.03-.39-.02-.38-.01-.36v-.01l.01-.36.02-.38.03-.39.04-.4.05-.4.06-.39.07-.38.08-.36.09-.34.1-.31.11-.28.12-.24.13-.2.14-.15.15-.1 1.04-.67.94-.73.84-.78.74-.82.65-.84.56-.85.48-.84.4-.82.33-.78.26-.73.2-.66.14-.58.09-.48.05-.37.02-.25.01-.12h4.91V9.23l.01-.17.02-.22.04-.27.06-.31.09-.34.12-.36.16-.37.21-.36.27-.35.33-.32.41-.27.5-.22.59-.14.69-.05h4.95l.21-.02.26-.04.3-.07.33-.1.35-.14.35-.19.33-.25.3-.31.26-.38.21-.46.13-.55.05-.63V1.8l-.01-.13-.04-.2-.1-.26-.16-.3-.25-.34-.34-.36-.45-.34-.59-.3-.73-.26-.9-.2-.15-.03-.15-.02-.15-.01h-.01l-.15.01-.15.02z"/>
        <path fill="#FFD43B" d="M14.25.18l.9.2.73.26.59.3.45.34.34.36.25.34.16.3.1.26.04.2.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.21.36-.16.37-.12.36-.09.34-.06.31-.04.27-.02.22-.01.17v3.06H3.17l-.01-.12-.02-.25-.05-.37-.09-.48-.14-.58-.2-.66-.26-.73-.33-.78-.4-.82-.48-.84-.56-.85-.65-.84-.74-.82-.84-.78-.94-.73-1.04-.67-.15-.1-.14-.15-.13-.2-.12-.24-.11-.28-.1-.31-.09-.34-.08-.36-.07-.38-.06-.39-.05-.4-.04-.4-.03-.39-.02-.38-.01-.36v-.01l.01-.36.02-.38.03-.39.04-.4.05-.4.06-.39.07-.38.08-.36.09-.34.1-.31.11-.28.12-.24.13-.2.14-.15.15-.1 1.04-.67.94-.73.84-.78.74-.82.65-.84.56-.85.48-.84.4-.82.33-.78.26-.73.2-.66.14-.58.09-.48.05-.37.02-.25.01-.12h4.91V9.23l.01-.17.02-.22.04-.27.06-.31.09-.34.12-.36.16-.37.21-.36.27-.35.33-.32.41-.27.5-.22.59-.14.69-.05h4.95l.21-.02.26-.04.3-.07.33-.1.35-.14.35-.19.33-.25.3-.31.26-.38.21-.46.13-.55.05-.63V1.8l-.01-.13-.04-.2-.1-.26-.16-.3-.25-.34-.34-.36-.45-.34-.59-.3-.73-.26-.9-.2-.15-.03-.15-.02-.15-.01h-.01l-.15.01-.15.02z"/>
      </svg>
    )
  },
  
  // Databases
  { 
    name: "PostgreSQL", 
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  { 
    name: "MongoDB", 
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#47A248" d="M17.193 9.555c-1.491-1.491-3.2-2.508-5.193-3.01v-.001c-.001 0-.001 0 0 0-.001 0-.001 0 0 0v.001c-1.993.502-3.702 1.519-5.193 3.01-3.73 3.73-3.73 9.78 0 13.51.896.896 1.96 1.608 3.149 2.11.596.252 1.22.38 1.85.38.63 0 1.254-.128 1.85-.38 1.189-.502 2.253-1.214 3.149-2.11 3.73-3.73 3.73-9.78 0-13.51zm-5.193 12.51c-1.491-1.491-3.2-2.508-5.193-3.01v-.001c-.001 0-.001 0 0 0-.001 0-.001 0 0 0v.001c-1.993.502-3.702 1.519-5.193 3.01-3.73 3.73-3.73 9.78 0 13.51.896.896 1.96 1.608 3.149 2.11.596.252 1.22.38 1.85.38.63 0 1.254-.128 1.85-.38 1.189-.502 2.253-1.214 3.149-2.11 3.73-3.73 3.73-9.78 0-13.51z"/>
      </svg>
    )
  },
  
  // AI & Machine Learning
  { 
    name: "TensorFlow", 
    category: "AI/ML",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#FF6F00" d="M1.292 5.856L11.54.033a1.162 1.162 0 011.13.003l10.25 5.823a1.163 1.163 0 01.58.998v11.14a1.16 1.16 0 01-.58.998L12.67 24.033a1.162 1.162 0 01-1.13.003L1.292 18.213a1.163 1.163 0 01-.58-.998V6.854a1.16 1.16 0 01.58-.998z"/>
        <path fill="#FF6F00" d="M12.67.033L1.292 5.856a1.163 1.163 0 00-.58.998v11.14a1.16 1.16 0 00.58.998L12.67 24.033a1.162 1.162 0 001.13.003l10.25-5.823a1.163 1.163 0 00.58-.998V6.854a1.16 1.16 0 00-.58-.998L13.8.033a1.162 1.162 0 00-1.13.003z"/>
      </svg>
    )
  },
  { 
    name: "PyTorch", 
    category: "AI/ML",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#EE4C2C" d="M12 0L1.608 5.04v6.912L12 17.952l10.392-6v-6.912L12 0zM2.4 6.24L12 10.8l9.6-4.56v5.28L12 16.32l-9.6-4.8V6.24z"/>
      </svg>
    )
  },
  
  // Security & Monitoring
  { 
    name: "Terraform", 
    category: "Infrastructure",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#623CE4" d="M12 0L1.608 5.04v6.912L12 17.952l10.392-6v-6.912L12 0zM2.4 6.24L12 10.8l9.6-4.56v5.28L12 16.32l-9.6-4.8V6.24z"/>
      </svg>
    )
  },
  { 
    name: "Grafana", 
    category: "Monitoring",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#F46800" d="M12 0L1.608 5.04v6.912L12 17.952l10.392-6v-6.912L12 0zM2.4 6.24L12 10.8l9.6-4.56v5.28L12 16.32l-9.6-4.8V6.24z"/>
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
          Our Technology Expertise
        </h2>
        <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#034078' }}>
          We master modern technologies across cloud, AI, security, and development to deliver comprehensive TaaS solutions that evolve with your business
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
            Continuous Technology Evolution
          </h3>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto" style={{ color: '#034078' }}>
            As part of our TaaS model, we continuously evaluate, adopt, and integrate new technologies to keep your solutions cutting-edge, secure, and future-ready. No technology debt, no outdated systems.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
