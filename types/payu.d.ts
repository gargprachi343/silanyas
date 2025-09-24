declare module 'payu-sdk' {
  interface PayUConfig {
    merchantKey: string;
    merchantSalt: string;
    payuBaseURL: string;
  }

  interface PayUPaymentData {
    txnid: string;
    amount: string;
    productinfo: string;
    firstname: string;
    email: string;
    phone: string;
    surl: string;
    furl: string;
  }

  interface PayUResponse {
    status: string;
    message: string;
    paymentUrl?: string;
    error?: string;
  }

  export class PayU {
    constructor(config: PayUConfig);
    initiatePayment(data: PayUPaymentData): Promise<PayUResponse>;
    verifyPayment(txnid: string): Promise<PayUResponse>;
  }
}
