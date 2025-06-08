"use client";

import { motion } from "framer-motion";

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient" | "glow";
  hover?: boolean;
}

export function ModernCard({ 
  children, 
  className = "", 
  variant = "default",
  hover = true 
}: ModernCardProps) {
  const baseClasses = "rounded-2xl backdrop-blur-sm border transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/90 border-gray-200/50 shadow-lg",
    glass: "bg-white/10 border-white/20 backdrop-blur-md",
    gradient: "bg-gradient-to-br from-blue-50/90 to-purple-50/90 border-gradient-to-r from-blue-200/50 to-purple-200/50",
    glow: "bg-white/90 border-blue-200/50 shadow-xl shadow-blue-500/10"
  };
  
  const hoverClasses = hover ? "hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      <div className="p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
}

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gradient" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function ModernButton({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "", 
  onClick 
}: ModernButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105",
    secondary: "bg-white/90 text-gray-900 border-2 border-gray-200 backdrop-blur-sm hover:bg-white hover:border-blue-300 hover:scale-105",
    gradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105",
    glass: "bg-white/20 text-white border border-white/30 backdrop-blur-md hover:bg-white/30 hover:scale-105"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        rounded-xl font-semibold transition-all duration-300
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function GradientText({ 
  children, 
  className = "",
  gradient = "from-blue-600 via-purple-600 to-pink-600"
}: { 
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}) {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

export function FloatingElement({ 
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}