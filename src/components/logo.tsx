"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "icon" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
}

export default function Logo({ 
  variant = "full", 
  size = "md", 
  className,
  animated = true 
}: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: "w-6 h-6",
      text: "text-lg",
      container: "space-x-2"
    },
    md: {
      icon: "w-8 h-8", 
      text: "text-xl",
      container: "space-x-2"
    },
    lg: {
      icon: "w-12 h-12",
      text: "text-2xl", 
      container: "space-x-3"
    }
  };

  const currentSize = sizeClasses[size];

  const IconLogo = () => (
    <motion.div
      className={cn(
        "relative",
        currentSize.icon,
        className
      )}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#034078" />
            <stop offset="100%" stopColor="#1282a2" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fefcfb" />
            <stop offset="100%" stopColor="#e0e1dd" />
          </linearGradient>
        </defs>
        
        {/* Main A shape with gradient */}
        <motion.path
          d="M20 80 L50 20 L80 80 L70 80 L50 50 L30 80 Z"
          fill="url(#logoGradient)"
          stroke="#1282a2"
          strokeWidth="1"
          initial={animated ? { scale: 0 } : {}}
          animate={animated ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        
        {/* Crossbar of the A */}
        <motion.rect
          x="35"
          y="65"
          width="30"
          height="8"
          fill="url(#logoGradient)"
          stroke="#1282a2"
          strokeWidth="0.5"
          initial={animated ? { scaleX: 0 } : {}}
          animate={animated ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
        
        {/* Circuit board pattern inside the A */}
        <motion.g
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Vertical line up the left leg */}
          <line
            x1="35"
            y1="75"
            x2="35"
            y2="45"
            stroke="url(#innerGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Horizontal line across the crossbar */}
          <line
            x1="35"
            y1="69"
            x2="65"
            y2="69"
            stroke="url(#innerGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Vertical line down the right leg */}
          <line
            x1="65"
            y1="45"
            x2="65"
            y2="75"
            stroke="url(#innerGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Extended line from bottom left node */}
          <line
            x1="35"
            y1="75"
            x2="25"
            y2="75"
            stroke="url(#innerGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Circuit nodes */}
          <circle cx="35" cy="45" r="2" fill="url(#innerGradient)" />
          <circle cx="35" cy="69" r="2" fill="url(#innerGradient)" />
          <circle cx="65" cy="69" r="2" fill="url(#innerGradient)" />
          <circle cx="65" cy="45" r="2" fill="url(#innerGradient)" />
          <circle cx="35" cy="75" r="2" fill="url(#innerGradient)" />
          <circle cx="25" cy="75" r="2" fill="url(#innerGradient)" />
          
          {/* Central connection node */}
          <circle cx="50" cy="69" r="2.5" fill="#034078" />
        </motion.g>
        
        {/* Subtle glow effect */}
        <motion.path
          d="M18 82 L50 18 L82 82 L72 82 L50 48 L28 82 Z"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1"
          opacity="0.3"
          initial={animated ? { scale: 0, opacity: 0 } : {}}
          animate={animated ? { scale: 1, opacity: 0.3 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </svg>
    </motion.div>
  );

  const TextLogo = () => (
    <motion.span
      className={cn(
        "font-bold text-textd group-hover:text-brand-secondary transition-colors duration-300",
        currentSize.text,
        className
      )}
      initial={animated ? { opacity: 0, x: -10 } : {}}
      animate={animated ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Amplied
    </motion.span>
  );

  if (variant === "icon") {
    return <IconLogo />;
  }

  return (
    <motion.div
      className={cn(
        "flex items-center",
        currentSize.container,
        className
      )}
      initial={animated ? { opacity: 0, y: -10 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <IconLogo />
      <TextLogo />
    </motion.div>
  );
}
