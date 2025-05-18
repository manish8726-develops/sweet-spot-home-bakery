import { getCakeDetails } from '../../../_services/index';
import ProductDetail from '../../../_components/_bakery/_cake/_components/ProductDetail';
import React from 'react';

export default async function Page({ params }) {
    const {cakedetails} = await params;
   
    
    const cakeDetails = await getCakeDetails(cakedetails);
    // console.log(cakeDetails);
    
  return (
    <div>
      <ProductDetail  />
    </div>
  );
}
