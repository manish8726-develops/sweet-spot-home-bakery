import axios from "axios";
import Image from "next/image";
import React from "react";

const OrderNow = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      orderDetails: formData.get("orderDetails"),
    };

    try {
      const response = await axios.post("/api/get-cake-order", data);
      alert("Order sent successfully!");
      event.target.reset(); // Clear form
    } catch (error) {
      alert("Failed to send order.");
      console.error("Error:", error.response?.data || error.message);
    }
  }

  return (
    <div className="text-[#4a3c32] px-4 py-10 bg-white">
      <h1 className="mb-10 text-4xl font-bold text-center md:text-5xl">ORDER NOW</h1>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <Image src="/bell.webp" height={205} width={178} alt="bell" draggable={false} />
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input name="fullName" type="text" placeholder="Full Name" required className="flex-1 px-4 py-3 text-sm border rounded-full outline-none" />
            <input name="phone" type="tel" placeholder="Phone Number" required className="flex-1 px-4 py-3 text-sm border rounded-full outline-none" />
          </div>
          <textarea name="orderDetails" placeholder="Your Order" rows={4} required className="px-4 py-3 text-sm border outline-none resize-none rounded-3xl"></textarea>
          <div className="flex justify-end">
            <button type="submit" className="px-8 hover:bg-[#4a3c32] hover:text-white py-2 border rounded-full font-semibold cursor-pointer transition">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
