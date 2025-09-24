import { NextRequest, NextResponse } from 'next/server';
import { PayU } from 'payu-sdk';

const PAYU_MERCHANT_KEY = process.env.PAYU_MERCHANT_KEY || "YOUR_MERCHANT_KEY";
const PAYU_MERCHANT_SALT = process.env.PAYU_MERCHANT_SALT || "YOUR_MERCHANT_SALT";
const PAYU_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://secure.payu.in' 
  : 'https://sandboxsecure.payu.in';

const payuClient = new PayU({
  merchantKey: PAYU_MERCHANT_KEY,
  merchantSalt: PAYU_MERCHANT_SALT,
  payuBaseURL: PAYU_BASE_URL
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { txnid } = body;

    // Verify payment status
    const response = await payuClient.verifyPayment(txnid);

    if (response.status === 'success') {
      // Handle successful payment (update order status, etc.)
      return NextResponse.redirect(new URL('/checkout/success', request.url));
    } else {
      throw new Error('Payment verification failed');
    }

  } catch (error: any) {
    console.error('Payment Verification Error:', error);
    return NextResponse.redirect(new URL('/checkout/error', request.url));
  }
}
