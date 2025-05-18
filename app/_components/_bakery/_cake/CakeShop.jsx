"use client";
import { getAllCakes } from "../../../_services/index";
import React, { useEffect, useState } from "react";
import Card from "./_components/Card";
const CakeShop = () => {


     const [data, setData] = useState([])
  const cakes = async () => {
    const res = await getAllCakes();
    if (res) {
      setData(res)
    }
  };

  useEffect(() => {
    cakes()
  }, []);
  console.log(data);

  return (
    <div>
      {data.length === 0 ? (
        <p className="text-3xl text-center text-gray-500 poppin my-15">
          Loading...
        </p>
      ) : (
        <div className="flex flex-wrap justify-center w-full gap-7 my-15">
          {data.map((cake, index) => (
            <Card
              key={index}
              name={cake.name}
              price={cake.price}
              sale={cake.sale}
              img={cake.productImage}
              id={cake.productImage.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CakeShop;
