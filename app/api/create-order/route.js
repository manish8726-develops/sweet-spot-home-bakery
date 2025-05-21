import { NextRequest,NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
});
export async function POST() {
    try {
        const order = await razorpay.orders.create({
            amount:100*100, //INFO: for ruppee to paise conversition
            currency:"INR",
            receipt:'receipt_'+Math.random().substring(7),
        })
        return NextResponse.json({orderId:order.id},{status:200})
    } catch (error) {
        console.error("Error on Creating Order:",error);
        return NextResponse.json(
            {error:"Error Creating order"},
            {status:500}
        )
    }
}