"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, BadgeCheck, ArrowUpRight } from 'lucide-react';

const statistics = [
  {
    value: '10,000+',
    label: 'Startup Ideas Generated',
    icon: Zap,
    description: 'Successful startup concepts created with our platform'
  },
  {
    value: '4,300+',
    label: 'Founders Supported',
    icon: Users,
    description: 'Entrepreneurs using our platform to launch their startups'
  },
  {
    value: '97%',
    label: 'Success Rate',
    icon: BadgeCheck,
    description: 'Of users recommend our platform to fellow entrepreneurs'
  },
];

export default function Statistics() {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: typeof statistics[0], index: number }) {
  return (
    <motion.div
      className="perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="group relative h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all overflow-hidden">
        {/* Background gradient */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity -z-10"></div>
        
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
              <stat.icon className="h-6 w-6 text-blue-600" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <h3 className="text-3xl font-bold mb-1 text-gray-900">{stat.value}</h3>
          <p className="font-medium mb-3 text-gray-900">{stat.label}</p>
          <p className="text-sm text-gray-600 mt-auto">{stat.description}</p>
        </div>
      </div>
    </motion.div>
  );
} 