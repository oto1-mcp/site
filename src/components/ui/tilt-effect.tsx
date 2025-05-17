"use client";

import React, { useEffect } from 'react';

export function TiltEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.tilt-card');
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardWrapper = cardElement.closest('.perspective-card-wrapper') as HTMLElement;
        
        if (!cardWrapper) return;
        
        const rect = cardWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if mouse is over this specific card
        if (
          x >= 0 && 
          x <= rect.width && 
          y >= 0 && 
          y <= rect.height
        ) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // Calculate rotation based on mouse position
          // Limit the rotation to a small range for subtlety
          const rotateY = ((x - centerX) / centerX) * 4; // max 4 degrees
          const rotateX = ((centerY - y) / centerY) * 4; // max 4 degrees
          
          cardElement.style.setProperty('--rotate-x', `${rotateX}deg`);
          cardElement.style.setProperty('--rotate-y', `${rotateY}deg`);
        } else {
          // Reset rotation when mouse is not over the card
          cardElement.style.setProperty('--rotate-x', '0deg');
          cardElement.style.setProperty('--rotate-y', '0deg');
        }
      });
    };
    
    const handleMouseLeave = () => {
      // Reset all cards when mouse leaves the document
      const cards = document.querySelectorAll('.tilt-card');
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        cardElement.style.setProperty('--rotate-x', '0deg');
        cardElement.style.setProperty('--rotate-y', '0deg');
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return null; // This component doesn't render anything
} 