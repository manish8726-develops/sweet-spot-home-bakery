import { getCakeDetails } from "../../../_services/index";
import ProductDetail from "../../../_components/_bakery/_cake/_components/ProductDetail";
import React from "react";

export default async function Page({ params }) {
  const { cakedetails } = await params;
  const data = await getCakeDetails(cakedetails);



  return (
    <div>
      <ProductDetail
        title={data.name}
        price={data.price}
        desc={data.productDescription}
        img={data.productImage}
        weight={data.weight}
        sale={data.sale}
        id={cakedetails}
      />
    </div>
  );
}
