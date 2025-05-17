"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Database, LineChart, Server, Workflow } from 'lucide-react';

const HeroAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconComponents = [
    { icon: Zap, color: 'text-blue-500' },
    { icon: Code, color: 'text-indigo-500' },
    { icon: Database, color: 'text-violet-500' },
    { icon: LineChart, color: 'text-purple-500' },
    { icon: Server, color: 'text-blue-400' },
    { icon: Workflow, color: 'text-indigo-400' },
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

  return (
    <div className="relative w-full h-[340px] md:h-[460px] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-xl" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
      
      {/* Main container */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Central platform mockup */}
        <motion.div
          className="relative w-64 md:w-80 h-48 md:h-56 flex items-center justify-center z-10"
          variants={itemVariants}
        >
          <div className="absolute inset-0 rounded-xl border border-blue-200/20 bg-gradient-to-br from-white/5 to-blue-500/5 backdrop-blur-sm shadow-xl" />
          
          {/* MCP Supervisor label */}
          <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-600">MCP Supervisor</span>
            <div className="flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            </div>
          </div>
          
          {/* Content inside platform mockup */}
          <div className="absolute top-10 left-4 right-4 bottom-4 flex flex-col">
            <div className="flex-1 mb-2 flex flex-col space-y-2">
              <div className="h-4 w-3/4 bg-blue-500/20 rounded-full"></div>
              <div className="h-3 w-5/6 bg-indigo-500/20 rounded-full"></div>
              <div className="h-3 w-2/3 bg-blue-500/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 bg-indigo-500/30 rounded-md flex items-center justify-center text-[8px] text-indigo-100">Web Development</div>
              <div className="h-8 bg-blue-500/30 rounded-md flex items-center justify-center text-[8px] text-blue-100">Content Creation</div>
              <div className="h-8 bg-violet-500/30 rounded-md flex items-center justify-center text-[8px] text-violet-100">Social Media</div>
              <div className="h-8 bg-purple-500/30 rounded-md flex items-center justify-center text-[8px] text-purple-100">Growth Hacking</div>
            </div>
          </div>
        </motion.div>
        
        {/* Orbiting icons */}
        {iconComponents.map((IconItem, index) => {
          const angle = (index * (360 / iconComponents.length)) * (Math.PI / 180);
          const radius = 150;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          
          return (
            <motion.div
              key={index}
              className={`absolute w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center ${IconItem.color}`}
              style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              animate={{
                x: [0, 5, -5, 0],
                y: [0, -5, 5, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <IconItem.icon size={20} />
            </motion.div>
          );
        })}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full z-0" style={{ opacity: 0.3 }}>
          <motion.path
            d="M150,150 L250,100 M150,150 L50,100 M150,150 L250,200 M150,150 L50,200 M150,150 L300,150 M150,150 L0,150"
            stroke="url(#lineGradient)"
            strokeWidth="1"
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
      </motion.div>
      
      {/* Particle effects */}
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400"
          initial={{
            x: Math.random() * 500,
            y: Math.random() * 400,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [null, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 6,
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