"use client";

import { use, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CartIcon from "../../../../../_components/_Navbar/CartIcon";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { removeFromCart } from "../../../../../_redux/cart/cartslice";

export default function CartPopup() {
  const [open, setOpen] = useState(false);
  const productsArr = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();
console.log(productsArr);

  return (
    <>
      {/* Cart button */}
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        <CartIcon count={productsArr.length} />
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-70">
        <DialogBackdrop
          transition
          className="fixed inset-0 transition-opacity duration-500 ease-in-out bg-gray-500/75 data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <DialogPanel
                transition
                className="w-screen max-w-md transition duration-500 ease-in-out transform pointer-events-auto data-closed:translate-x-full sm:duration-700"
              >
                <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping Bag
                      </DialogTitle>
                      <div className="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {productsArr.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                              <Image
                                src="/icons/shopping-bag.png"
                                height={80}
                                width={80}
                                alt="Empty Bag"
                                className="opacity-70"
                              />
                              <p className="text-lg font-semibold text-gray-700">
                                Your bag is empty
                              </p>
                            </div>
                          ) : (
                            productsArr.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="overflow-hidden border border-gray-200 rounded-md size-24 shrink-0">
                                  <Image
                                    alt={product.name}
                                    src={product.image}
                                    className="object-cover size-full"
                                    height={50}
                                    width={50}
                                    draggable={false}
                                  />
                                </div>

                                <div className="flex flex-col flex-1 ml-4">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link
                                          onClick={() => {
                                            setOpen(false);
                                          }}
                                          href={`/shop/cakes/${product.id}`}
                                        >
                                          {product.name}
                                        </Link>
                                      </h3>
                                      <p className="ml-4">₹{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      N/A Color
                                    </p>
                                  </div>
                                  <div className="flex items-end justify-between flex-1 text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          dispatch(removeFromCart(product.id));
                                        }}
                                        className="font-medium text-indigo-600 cursor-pointer hover:text-red-500"
                                      >
                                        <Trash2 />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>
                        ₹
                        {productsArr.length !== 0
                          ? productsArr.reduce((acc, crv) => acc + crv.price, 0)
                          : 0}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="flex items-center justify-center gap-5">
                      <div className="mt-6">
                        <Link
                          onClick={() => setOpen(false)}
                          href="#"
                          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-xs hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6">
                        <Link
                          onClick={() => {
                            setOpen(false);
                          }}
                          href="/cart"
                          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-xs hover:bg-orange-700"
                        >
                          View Cart
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
