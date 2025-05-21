import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const mutation = `
    mutation CreateOrder(
      $firstName: String!
      $lastName: String!
      $email: String!
      $phoneNumber: String!
      $address: String!
      $city: String!
      $state: String!
      $pincode: String!
      $products: String!
      $totalAmount: Int!
      $couponCode: String
      $discountAmount: Int
    ) {
      createOrder(data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phoneNumber: $phoneNumber
        address: $address
        city: $city
        state: $state
        pincode: $pincode
        products: $products
        totalAmount: $totalAmount
        couponCode: $couponCode
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
    phoneNumber: body.phoneNumber, // make sure it's a string
    address: body.address,
    city: body.city,
    state: "Uttar Pradesh", // or body.state
    pincode: body.pincode,
    products: body.products.join(", "),
    totalAmount: parseInt(body.totalAmount),
    couponCode: body.couponCode || "",
    discountAmount: parseInt(body.discountAmount || 0),
  };

  const response = await fetch("https://ap-south-1.cdn.hygraph.com/content/cmas2cgfh01k907w6omg336gj/master", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_KEY}`,
    },
    body: JSON.stringify({
      query: mutation,
      variables: variables,
    }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error("Hygraph error:", result.errors);
    return NextResponse.json({ error: "Failed to save order", details: result.errors }, { status: 500 });
  }

  return NextResponse.json(result.data);
}
