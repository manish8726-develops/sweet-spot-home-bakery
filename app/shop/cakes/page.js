"use client";
import CakeShop from "../../_components/_bakery/_cake/CakeShop";
import { getAllCakes } from "../../_services/index";
import React, { useEffect, useState } from "react";

const page = () => {
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
  return (
    <div>
      <CakeShop data={data}/>
    </div>
  )
}

export default page
