import { graphqlRequest } from "../../../lib/graphqlClient";

const CREATE_ORDER_MUTATION = `
  mutation CreateCakeOrder($fullName: String!, $orderDescription: String!, $phone: String!) {
    createCakeOrderForm(
      data: {
        fullName: $fullName
        orderDescription: $orderDescription
        phone: $phone
      }
    ) {
      createdAt
    }
  }
`;

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phone, orderDetails } = body;

    const result = await graphqlRequest(CREATE_ORDER_MUTATION, {
      fullName,
      orderDescription: orderDetails,
      phone,
    });

    return Response.json({
      message: "Order submitted",
      createdAt: result.createCakeOrderForm.createdAt,
    });
  } catch (error) {
    console.error("GraphQL Error:", error);
    return new Response(
      JSON.stringify({ message: "Order submission failed", error: error.message }),
      { status: 500 }
    );
  }
}
