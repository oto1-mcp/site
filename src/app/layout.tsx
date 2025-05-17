import React from 'react';
import './globals.css';
import './custom.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { TiltEffect } from '@/components/ui/tilt-effect';
import Script from 'next/script';
import { AuthProvider } from '@/components/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '0to1',
  description: 'AI-powered orchestration for your startup journey',
  keywords: 'AI, startup, 0to1, orchestration, hackathon',
  icons: {
    icon: '/sparkles-favicon.svg',
    shortcut: '/sparkles-favicon.svg',
    apple: '/sparkles-favicon.svg',
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
        <link rel="icon" href="/sparkles-favicon.svg" sizes="any" />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rl632iny7r");
          `}
        </Script>
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
        <AuthProvider>
          <div className="relative min-h-screen flex flex-col bg-white text-black">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <TiltEffect />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
} 