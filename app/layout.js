// app/layout.tsx or layout.js
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  ClerkProvider,
} from "@clerk/nextjs";
import Layout from "./_components/Layout";
import { Analytics } from "@vercel/analytics/next"
export const metadata = {
  title: "Sweet Spot Home Bakery",
  description: "An Amazing Spot for Cake Lover💖",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
           <SpeedInsights/>
           <Analytics/>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
    </ClerkProvider>
  );
}
