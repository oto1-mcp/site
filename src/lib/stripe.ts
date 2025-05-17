import { loadStripe, Stripe } from '@stripe/stripe-js';

// Load the Stripe publishable key from environment variables
let stripePromise: Promise<Stripe | null>;

// Initialize Stripe
export const getStripe = () => {
  if (!stripePromise) {
    // Replace with your actual publishable key or use environment variable
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      throw new Error('Stripe publishable key is not set in environment variables');
    }
    
    stripePromise = loadStripe(publishableKey);
  }
  
  return stripePromise;
};
