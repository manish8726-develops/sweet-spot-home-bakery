import request, { gql } from "graphql-request";
const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cmas2cgfh01k907w6omg336gj/master";
export const getAllCakes = async () => {
  const query = gql`
query getAllProducts {
  products {
    name
    price
    productDescription
    productImage {
      url
      id
    }
    quantity
    sale
    weight
    id
  }
}
  `;
  const result = await request(MASTER_URL, query);
  return result.products;
};
export const getCakeDetails = async (id) => {
  console.log(id);
  
  const query = gql`
    query getCakeDetails($id: ID!) {
      product(where: { id: $id }) {
        name
        price
        productDescription
        productImage {
          url
          id
        }
        sale
        quantity
        weight
      }
    }
  `;

  const variables = { id };

  const result = await request(MASTER_URL, query, variables);
  return result.product;
};


export const gallery = async () => {
const query = gql`query getPhotos {
  galleries {
    photo {
      id
      height
      url
      width
      updatedAt
    }
  }
}`
  const result = await request(MASTER_URL, query);
  return result.galleries;
}