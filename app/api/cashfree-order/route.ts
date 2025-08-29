import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const { orderId, orderAmount, customerName, customerEmail, customerPhone } = await req.json();

  // Cashfree credentials (use env variables in production)
  const CASHFREE_APP_ID = "YOUR_CASHFREE_APP_ID";
  const CASHFREE_SECRET_KEY = "YOUR_CASHFREE_SECRET_KEY";
  const CASHFREE_API_URL = "https://sandbox.cashfree.com/pg/orders"; // Use production URL for live

  try {
    const response = await axios.post(
      CASHFREE_API_URL,
      {
        order_id: orderId,
        order_amount: orderAmount,
        customer_details: {
          customer_id: customerEmail,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
        },
      },
      {
        headers: {
          "x-api-version": "2022-09-01",
          "Content-Type": "application/json",
          "x-client-id": CASHFREE_APP_ID,
          "x-client-secret": CASHFREE_SECRET_KEY,
        },
      }
    );

    // Return order token to frontend
    return NextResponse.json({ orderToken: response.data.order_token });
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}