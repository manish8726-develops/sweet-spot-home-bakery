import Razorpay from 'razorpay';

export async function POST(req) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: 500 * 100, // replace with actual amount in paise
      currency: 'INR',
      receipt: `order_rcptid_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return new Response(JSON.stringify({ orderId: order.id }), {
      status: 200,
    });
  } catch (err) {
    console.error("Razorpay Error:", err);
    return new Response(JSON.stringify({ error: 'Order creation failed' }), {
      status: 500,
    });
  }
}
