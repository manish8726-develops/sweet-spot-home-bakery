export async function graphqlRequest(query, variables = {}) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENT_AUTH_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  return json.data;
}