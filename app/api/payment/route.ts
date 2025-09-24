import { NextRequest, NextResponse } from 'next/server';
import { PayU } from 'payu-sdk';

// PayU credentials (use env variables in production)
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
    const { amount, productInfo, customerName, customerEmail, customerPhone } = body;

    // Generate a unique transaction ID
    const txnid = 'TXN_' + Date.now();

    const paymentData = {
      txnid,
      amount: amount.toString(),
      productinfo: productInfo,
      firstname: customerName,
      email: customerEmail,
      phone: customerPhone,
      surl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/success`, // Success URL
      furl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/failure`  // Failure URL
    };

    const response = await payuClient.initiatePayment(paymentData);

    if (response.status === 'success') {
      return NextResponse.json({
        success: true,
        paymentUrl: response.paymentUrl
      });
    } else {
      throw new Error(response.error || 'Payment initiation failed');
    }

  } catch (error: any) {
    console.error('Payment Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
