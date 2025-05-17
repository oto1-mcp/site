import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-04-30.basil',
});

// This is your Stripe webhook secret for testing your endpoint locally
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  if (!webhookSecret) {
    return NextResponse.json(
      { error: 'Webhook secret is not set' },
      { status: 500 }
    );
  }

  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature') || '';

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error(`⚠️ Webhook signature verification failed.`, err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        
        // This event occurs when a customer completes the checkout process
        // Here you would:
        // 1. Add the user to your waitlist database
        // 2. Send a confirmation email to the customer
        // 3. Record the payment in your system
        console.log(`💰 Payment successful for session: ${session.id}`);
        
        break;
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        // This event occurs when a payment is successfully processed
        // It's useful for tracking the payment status separately from the checkout completion
        console.log(`💳 Payment processed successfully: ${paymentIntent.id}`);
        
        break;
      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;
        
        // This event occurs when a payment attempt fails
        // You might want to:
        // 1. Log the failure reason
        // 2. Notify the customer or your support team
        console.log(`❌ Payment failed: ${failedPaymentIntent.id}, reason: ${failedPaymentIntent.last_payment_error?.message || 'unknown'}`);
        
        break;
      case 'customer.created':
        const customer = event.data.object as Stripe.Customer;
        
        // This event occurs when a new customer is created in Stripe
        // Useful for tracking new users in your system
        console.log(`👤 New customer created: ${customer.id}, email: ${customer.email}`);
        
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error(`❌ Error processing webhook:`, err);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

// We need to disable the default body parser to receive the raw body for signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};
