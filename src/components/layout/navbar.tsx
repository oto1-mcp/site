"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MenuIcon, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Features',
    href: '/#features',
  },
  {
    label: 'How It Works',
    href: '/#how-it-works',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full backdrop-blur transition-all duration-200 bg-white ${
      scrolled ? 'border-b border-gray-200 shadow-sm' : ''
    }`}>
      <div className="container mx-auto px-4 flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
            <span className="text-blue-600">0to1</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="default" size="sm" className="ml-2 rounded-full px-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity text-white">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            className="ml-2 p-1 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-gray-200 bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 font-medium hover:text-gray-900 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <Button variant="default" className="mt-2 rounded-full w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity">
                  <Link href="/dashboard">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 