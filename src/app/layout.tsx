import React from 'react';
import './globals.css';
import './custom.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { TiltEffect } from '@/components/ui/tilt-effect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '0to1',
  description: 'AI-powered orchestration for your startup journey',
  keywords: 'AI, startup, 0to1, orchestration, hackathon',
  icons: {
    icon: '/blue-star-favicon.ico',
    shortcut: '/blue-star-favicon.ico',
    apple: '/blue-star-favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/blue-star-favicon.ico" sizes="any" />
        <style>{`
          body {
            background-color: white !important;
            color: black !important;
          }
          .bg-white {
            background-color: white !important;
          }
          .text-gray-900 {
            color: #111827 !important;
          }
          .text-gray-600 {
            color: #4B5563 !important;
          }
          .border-gray-200 {
            border-color: #E5E7EB !important;
          }
          .text-blue-600 {
            color: #2563EB !important;
          }
          .from-blue-600 {
            --tw-gradient-from: #2563EB !important;
          }
          .to-indigo-600 {
            --tw-gradient-to: #4F46E5 !important;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-white text-black`} style={{backgroundColor: 'white', color: 'black'}}>
        <div className="relative min-h-screen flex flex-col bg-white text-black">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <TiltEffect />
        </div>
      </body>
    </html>
  );
} 