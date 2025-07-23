// /app/api/save-order/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const mutation = `
      mutation CreateOrder(
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $phoneNumber: String!,
        $address: String!,
        $city: String!,
        $state: String!,
        $pincode: String!,
        $products: String!,
        $totalAmount: Int!,
        $couponCode: String,
        $discountAmount: Int!
      ) {
        createOrder(data: {
          firstName: $firstName,
          lastName: $lastName,
          email: $email,
          phoneNumber: $phoneNumber,
          address: $address,
          city: $city,
          state: $state,
          pincode: $pincode,
          products: $products,
          totalAmount: $totalAmount,
          couponCode: $couponCode,
          discountAmount: $discountAmount
        }) {
          id
        }
      }
    `;

    const variables = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phoneNumber: String(body.phoneNumber),
      address: body.address,
      city: body.city,
      state: body.state || "Uttar Pradesh",
      pincode: body.pincode,
      products: body.products,
      totalAmount: Math.round(body.totalAmount),
      couponCode: body.couponCode || null,
      discountAmount: Math.round(body.discountAmount || 0),
    };

    const hygraphRes = await fetch("https://ap-south-1.cdn.hygraph.com/content/cmas2cgfh01k907w6omg336gj/master", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_KEY}`,
      },
      body: JSON.stringify({
        query: mutation,
        variables,
      }),
    });

    const result = await hygraphRes.json();

    if (result.errors) {
      console.error("❌ Hygraph Error:", JSON.stringify(result.errors, null, 2));
      return NextResponse.json(
        { error: "Failed to save order", details: result.errors },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, orderId: result.data.createOrder.id }, { status: 200 });

  } catch (err) {
    console.error("❌ Save Order Error:", err);
    return NextResponse.json({ error: "Server error while saving order" }, { status: 500 });
  }
}
