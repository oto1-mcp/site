"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Database, LineChart, Server, Workflow } from 'lucide-react';

const HeroAnimation = () => {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconComponents = [
    { icon: Database, color: 'text-purple-500', bg: 'bg-purple-100' },
    { icon: Code, color: 'text-blue-500', bg: 'bg-blue-100' },
    { icon: Workflow, color: 'text-violet-500', bg: 'bg-violet-100' },
    { icon: LineChart, color: 'text-indigo-500', bg: 'bg-indigo-100' },
  ];
  
  // This creates staggered animations for the elements
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const serviceBoxes = [
    { title: 'Web Development', color: 'bg-indigo-400/80', textColor: 'text-white' },
    { title: 'Content Creation', color: 'bg-blue-400/80', textColor: 'text-white' },
    { title: 'Social Media', color: 'bg-violet-400/80', textColor: 'text-white' },
    { title: 'Growth Hacking', color: 'bg-purple-400/80', textColor: 'text-white' },
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[580px] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      
      {/* Main container */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Connection lines - draw these first so they appear behind */}
        <svg className="absolute inset-0 w-full h-full z-0" style={{ opacity: 0.3 }}>
          <motion.path
            d="M200,200 L330,120 M200,200 L70,120 M200,200 L330,280 M200,200 L70,280 M200,200 L400,200 M200,200 L0,200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Central platform mockup */}
        <motion.div
          className="relative w-[320px] md:w-[420px] h-[260px] md:h-[340px] flex items-center justify-center z-10"
          variants={itemVariants}
          style={{
            perspective: "1500px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div 
            className="absolute inset-0 rounded-2xl border border-blue-100 bg-white shadow-lg"
            initial={{ rotateX: 10, rotateY: -10 }}
            animate={{ rotateX: 5, rotateY: -5 }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.05)"
            }}
          >
          
            {/* Platform header */}
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
              <motion.span 
                className="text-sm font-semibold text-blue-600"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                0to1
              </motion.span>
              <div className="flex space-x-1">
                <motion.span 
                  className="w-2.5 h-2.5 rounded-full bg-red-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.2 }}
                ></motion.span>
                <motion.span 
                  className="w-2.5 h-2.5 rounded-full bg-yellow-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.2 }}
                ></motion.span>
                <motion.span 
                  className="w-2.5 h-2.5 rounded-full bg-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.2 }}
                ></motion.span>
              </div>
            </div>
            
            {/* Content inside platform mockup */}
            <div className="absolute top-12 left-4 right-4 bottom-4 flex flex-col space-y-4">
              {/* Placeholder lines */}
              <div className="space-y-2.5">
                <motion.div 
                  className="h-2.5 w-3/4 bg-blue-100 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.9 }}
                ></motion.div>
                <motion.div 
                  className="h-2.5 w-5/6 bg-indigo-100 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "83.333%" }}
                  transition={{ duration: 1, delay: 1.0 }}
                ></motion.div>
                <motion.div 
                  className="h-2.5 w-2/3 bg-blue-100 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "66.666%" }}
                  transition={{ duration: 1, delay: 1.1 }}
                ></motion.div>
              </div>
              
              {/* Service boxes */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {serviceBoxes.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`h-10 ${service.color} rounded-lg flex items-center justify-center ${service.textColor} text-xs font-medium cursor-pointer transition-all`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: hovered === index ? 1.05 : 1,
                      y: hovered === index ? -2 : 0,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ 
                      duration: 0.2,
                      delay: 1.2 + index * 0.1
                    }}
                    onHoverStart={() => setHovered(index)}
                    onHoverEnd={() => setHovered(null)}
                    style={{
                      boxShadow: hovered === index ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"
                    }}
                  >
                    {service.title}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Orbiting icons */}
        {iconComponents.map((IconItem, index) => {
          const angle = (index * (360 / iconComponents.length)) * (Math.PI / 180);
          const radius = 220;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          
          return (
            <motion.div
              key={index}
              className={`absolute w-14 h-14 rounded-full ${IconItem.bg} backdrop-blur-sm border border-white shadow-md flex items-center justify-center ${IconItem.color} cursor-pointer`}
              style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.2, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
              animate={{
                x: [0, 10, -10, 0],
                y: [0, -10, 10, 0],
                boxShadow: ["0 4px 8px rgba(0, 0, 0, 0.05)", "0 8px 16px rgba(0, 0, 0, 0.1)", "0 4px 8px rgba(0, 0, 0, 0.05)"]
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <IconItem.icon size={28} />
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Particle effects */}
      {[...Array(25)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-2 h-2 rounded-full bg-blue-400"
          initial={{
            x: Math.random() * 800 - 200,
            y: Math.random() * 600,
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{
            y: [null, Math.random() * -200 - 50],
            opacity: [null, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 8,
            ease: "easeOut",
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default HeroAnimation; 