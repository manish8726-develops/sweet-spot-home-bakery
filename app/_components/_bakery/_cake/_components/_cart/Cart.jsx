"use client";
import { removeFromCart } from "../../../../../_redux/cart/cartslice";
import { Trash2, Verified, WatchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    color: "Sienna",
    size: "Large",
    price: 32.0,
    quantity: 1,
    stockStatus: "In stock",
    imageUrl:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
  },
  {
    id: 2,
    name: "Basic Tee",
    color: "Black",
    size: "Large",
    price: 32.0,
    quantity: 6,
    stockStatus: "Ships in 3–4 weeks",
    imageUrl:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
  },
];

export default function Cart() {
  const productsArr = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shipping = 5;
  const tax = 8.32;
  const total = subtotal + shipping + tax;

  return (
    <div className="px-4 py-8 mx-auto bg-white sm:px-6 lg:px-8 max-w-7xl">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Product List */}
        <div className="space-y-8 lg:col-span-2">
          {productsArr.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
              <Image
                src="/icons/empty-cart.png"
                height={150}
                width={150}
                alt="Empty Cart"
                className="opacity-70"
                draggable={false}
              />
              <p className="text-lg font-semibold text-gray-700">
                Your Cart is empty
              </p>
            </div>
          ) : (
            productsArr.map((product) => (
              <div
                key={product.id}
                className="flex items-start gap-4 pb-6 border-b sm:gap-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded w-28 h-28 shrink-0"
                />

                <div className="flex flex-col justify-between flex-1 w-full">
                  {/* Top Section */}
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <h2 className="text-base font-semibold text-gray-900">
                        {product.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {"Color N/A"} &nbsp; | &nbsp; {"Size N/A"}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        ${product.price}
                      </p>
                      {/* <p
              className={`mt-1 text-sm flex items-center gap-1 ${
                product.stockStatus.includes("stock")
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {product.stockStatus.includes("stock") ? <Verified/> :<WatchIcon/>}{" "}
              {product.stockStatus}
            </p> */}
                      <p>Status: Unavailable</p>
                    </div>

                    {/* Delete button for all screen sizes */}
                    <button className="text-xl text-gray-400 cursor-pointer hover:text-red-500 sm:hidden">
                      <Trash2 />
                    </button>
                  </div>

                  {/* Bottom Controls */}
                  <div className="flex items-center justify-between mt-4 sm:mt-2">
                    <select
                      defaultValue={product.quantity}
                      className="px-2 py-1 text-sm border rounded"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1}>{i + 1}</option>
                      ))}
                    </select>

                    {/* Delete button for sm and above */}
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="hidden text-xl text-gray-400 cursor-pointer sm:block hover:text-red-500"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Order summary
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>
                Shipping estimate{" "}
                <span className="text-gray-400" title="Estimated flat rate">
                  (?)
                </span>
              </span>
              <span>${shipping.toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>
                Tax estimate{" "}
                <span className="text-gray-400" title="Estimated tax">
                  (?)
                </span>
              </span>
              <span>${tax.toFixed(2)}</span>
            </li>
            <li className="flex justify-between pt-3 font-semibold border-t">
              <span>Order total</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
          <button className="w-full py-3 mt-6 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
