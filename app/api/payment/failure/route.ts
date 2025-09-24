import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log payment failure
    console.error('Payment Failed:', body);

    // Redirect to failure page
    return NextResponse.redirect(new URL('/checkout/error', request.url));

  } catch (error: any) {
    console.error('Payment Failure Handler Error:', error);
    return NextResponse.redirect(new URL('/checkout/error', request.url));
  }
}
