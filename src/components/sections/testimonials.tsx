"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "0to1 helped us launch our SaaS in just 3 weeks. What normally would have taken months was compressed into days.",
    author: "Sarah Johnson",
    role: "Founder",
    company: "MetricMind"
  },
  {
    id: 2,
    quote: "The seamless orchestration between different AI agents gave us a cohesive strategy. Our social media presence grew 300% in the first month.",
    author: "David Chen",
    role: "CEO",
    company: "NexTech Solutions"
  },
  {
    id: 3,
    quote: "As a non-technical founder, I was able to build a stunning web app and launch my digital product in record time. Game changer!",
    author: "Mia Rodriguez",
    role: "Founder",
    company: "EdTech Innovators"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how other founders used 0to1 to bring their startup ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative rounded-lg border border-border/50 bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 