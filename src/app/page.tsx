"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal, Code, Activity, CheckCircle, BarChart, LucideSparkles, Check, ArrowUpRight } from 'lucide-react';
import HeroAnimation from '@/components/ui/hero-animation';
import Statistics from '@/components/sections/statistics';
import Testimonials from '@/components/sections/testimonials';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animation */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[100px]"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
                <span className="mr-1.5">✨</span> AI-powered startup builder
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 lg:leading-[1.1] text-gray-900">
                Orchestrate Your <span className="text-blue-600">Startup Journey</span> With AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Our MCP Supervisor coordinates specialized AI agents to build your startup from concept to launch - all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity text-white">
                  <Link href="/dashboard" className="flex items-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-gray-300">
                  <Link href="/#how-it-works" className="flex items-center">
                    How It Works <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  "Web App Development", 
                  "Social Media Setup", 
                  "Content Creation"
                ].map((item) => (
                  <div key={item} className="flex items-center text-sm text-gray-700">
                    <Check size={16} className="mr-2 text-green-500" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              <span className="mr-1.5">🚀</span> Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Powerful Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to launch your startup quickly and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                className="relative group rounded-xl border border-gray-200 bg-white p-6 hover:border-blue-500/50 transition-all hover:shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                    <feature.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
              <span className="mr-1.5">🔍</span> Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to reality in three simple steps.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-gradient-to-b from-blue-600/50 via-indigo-600/50 to-transparent lg:hidden"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.title} 
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-2xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="md:pt-4">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-[100px]"></div>
            
            <motion.div 
              className="max-w-2xl mx-auto text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <LucideSparkles size={28} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Launch Your Startup?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of founders who are building the future with our MCP Supervisor platform.
              </p>
              <Button size="lg" className="rounded-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity text-white">
                <Link href="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: 'Web App Development',
    description: 'Specialized MCP creates custom web applications to showcase your startup\'s unique value proposition.',
    icon: Code,
  },
  {
    title: 'Social Media Management',
    description: 'Dedicated MCP creates and manages social media accounts across platforms for maximum exposure.',
    icon: Activity,
  },
  {
    title: 'Content Creation',
    description: 'Content MCP generates engaging and SEO-optimized content to attract and convert customers.',
    icon: Terminal,
  },
  {
    title: 'Growth Hacking',
    description: 'Strategic MCP identifies and implements tactics for rapid, sustainable growth.',
    icon: BarChart,
  },
  {
    title: 'Smart Orchestration',
    description: 'Our MCP Supervisor coordinates all activities for optimal efficiency and results.',
    icon: LucideSparkles,
  },
  {
    title: 'Progress Tracking',
    description: 'Real-time dashboards show your progress and provide valuable insights.',
    icon: CheckCircle,
  },
];

const steps = [
  {
    title: 'Enter Your Vision',
    description: 'Describe your startup idea in our intuitive prompt interface. Be as detailed or concise as you like.',
  },
  {
    title: 'MCPs Get to Work',
    description: 'Our Supervisor MCP analyzes your input and delegates tasks to specialized MCPs for optimal execution.',
  },
  {
    title: 'Launch Your Startup',
    description: 'Receive a complete package including web application, social media accounts, content, and growth strategies.',
  },
]; 