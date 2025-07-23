"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useSelector } from "react-redux";
import Script from "next/script";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";

export default function Checkout() {
  const { user } = useUser();
  const productsArr = useSelector((state) => state.counter.items);

  const [coupon, setCoupon] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const pincodeRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    const subtotal = productsArr.reduce((acc, item) => acc + item.price, 0);
    const delivery = subtotal < 499 ? 50 : 0;
    setDeliveryCharge(delivery);

    let discount = 0;
    if (isCouponValid) {
      discount = (subtotal + delivery) * 0.1;
      setDiscountAmount(Math.round(discount));
    } else {
      setDiscountAmount(0);
    }

    const total = subtotal + delivery - discount;
    setFinalTotal(Math.round(total));
  }, [productsArr, isCouponValid]);

  const validateForm = () => {
    return (
      firstNameRef.current?.value &&
      lastNameRef.current?.value &&
      addressRef.current?.value &&
      cityRef.current?.value &&
      pincodeRef.current?.value &&
      phoneRef.current?.value &&
      emailRef.current?.value
    );
  };

  const handleApplyCoupon = () => {
    const validCoupons = ["MANISH10", "ANKITA10"];
    if (validCoupons.includes(coupon.trim().toUpperCase())) {
      setIsCouponValid(true);
    } else {
      setIsCouponValid(false);
    }
  };

 const handlePayment = async () => {
  if (!validateForm()) {
    alert("Please fill all required fields.");
    return;
  }
  if (!termsAccepted) {
    alert("Please accept the terms and conditions.");
    return;
  }

  setIsProcessing(true);
  try {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: finalTotal }), // Send amount in ₹
    });

    const data = await response.json();

    if (!data.orderId) {
      throw new Error("Failed to get order ID from server");
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: finalTotal * 100,
      currency: "INR",
      name: "Sweet Spot Bakery",
      description: `Thanks for shopping with us, ${user?.firstName || "friend"}!`,
      order_id: data.orderId,
      handler: async function (response) {
        console.log("Payment Successful", response);

        const orderData = {
          firstName: firstNameRef.current?.value,
          lastName: lastNameRef.current?.value,
          email: emailRef.current?.value,
          phoneNumber: phoneRef.current?.value,
          address: addressRef.current?.value,
          city: cityRef.current?.value,
          state: "Uttar Pradesh",
          pincode: pincodeRef.current?.value,
          products: productsArr.map((p) => p.name).join(", "),
          totalAmount: finalTotal,
          couponCode: coupon.trim().toUpperCase() || null,
          discountAmount: discountAmount,
        };

        const res = await fetch("/api/save-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });

        const result = await res.json();
        console.log("Order saved to Hygraph ✅", result);

        alert("🎉 Payment successful and order saved!");
      },
      prefill: {
        name: user?.fullName || "Guest User",
        email: user?.primaryEmailAddress?.emailAddress || "",
        contact: user?.phoneNumbers?.[0]?.phoneNumber || "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error("Payment failed", error);
    alert("Payment failed. Please try again.");
  } finally {
    setIsProcessing(false);
  }
};

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 sm:px-6 lg:px-20">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        {/* Address Form */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-pink-700">
            Address Details
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                ref={firstNameRef}
                defaultValue={user?.firstName || ""}
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                ref={lastNameRef}
                defaultValue={user?.lastName || ""}
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="p-3 bg-gray-100 rounded-md">India</div>
            <input
              ref={addressRef}
              type="text"
              placeholder="House number and street name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="w-full p-3 border rounded-md"
            />
            <input
              ref={cityRef}
              type="text"
              placeholder="Town / City"
              className="w-full p-3 border rounded-md"
            />
            <div className="p-3 bg-gray-100 rounded-md">Uttar Pradesh</div>
            <input
              ref={pincodeRef}
              type="text"
              placeholder="PIN Code"
              className="w-full p-3 border rounded-md"
            />
            <input
              ref={phoneRef}
              type="text"
              placeholder="Phone"
              className="w-full p-3 border rounded-md"
            />
            <input
              ref={emailRef}
              defaultValue={user?.primaryEmailAddress?.emailAddress || ""}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-md"
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-bold text-pink-700">Your Order</h2>
          <div className="space-y-4 text-sm text-gray-800">
            {productsArr.length === 0 ? (
              <p className="text-red-500">No items in cart</p>
            ) : (
              productsArr.map((item, index) => (
                <div key={index} className="flex justify-between pb-2 border-b">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))
            )}

            {productsArr.length !== 0 && (
              <>
                <div className="flex justify-between pb-2 border-b">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">+₹{deliveryCharge}</span>
                </div>

                {isCouponValid && (
                  <div className="flex justify-between pb-2 text-sm font-medium text-green-700 border-b">
                    <span>
                      Coupon Applied (
                      <span className="uppercase">{coupon.trim()}</span>)
                    </span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between pt-2 font-bold">
                  <span>Total</span>
                  <span>₹{finalTotal}</span>
                </div>
              </>
            )}
          </div>

          {/* Coupon */}
          <Dialog>
            <DialogTrigger className="mt-4 text-pink-600 cursor-pointer hover:underline">
              Have a coupon? Tap here
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter the Coupon code</DialogTitle>
                <div className="flex flex-col items-start gap-2 mt-4">
                  <div className="flex flex-col w-full gap-2 sm:flex-row sm:items-center">
                    <Input
                      onChange={(e) => setCoupon(e.target.value)}
                      type="text"
                      placeholder="Coupon Code"
                      className="flex-1"
                    />
                    <Button onClick={handleApplyCoupon} type="button">
                      Apply
                    </Button>
                  </div>
                  {isCouponValid === true && (
                    <p className="text-green-600">
                      🎉 Coupon Applied! 10% off.
                    </p>
                  )}
                  {isCouponValid === false && (
                    <p className="text-red-600">❌ Invalid coupon.</p>
                  )}
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Razorpay Info */}
          <div className="flex flex-col gap-3 p-4 mt-6 border border-purple-100 rounded-md sm:flex-row sm:items-center bg-purple-50">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/icons/RazorPay.png"
                height={60}
                width={100}
                alt="Razorpay Logo"
                className="object-contain"
              />
            </div>
            <div className="text-sm text-center text-gray-700 sm:text-left">
              <p>UPI, Cards, NetBanking accepted</p>
              <p className="text-xs text-gray-500">Powered by RazorPay</p>
            </div>
          </div>

          {/* Terms + Button */}
          <div className="mt-6 space-y-4 text-sm text-gray-600">
            <p>
              Your data will be used to process your order, support your
              experience, and for other purposes described in our{" "}
              <a href="#" className="text-pink-600 hover:underline">
                privacy policy
              </a>
              .
            </p>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1"
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-pink-600 hover:underline">
                  terms and conditions
                </a>
              </span>
            </label>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-3 font-semibold text-white rounded-md ${
                isProcessing ? "bg-gray-500" : "bg-pink-700 hover:bg-pink-600"
              }`}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
