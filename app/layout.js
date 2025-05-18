// app/layout.tsx or layout.js
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import Layout from "./_components/Layout";

export const metadata = {
  title: "Sweet Spot Home Bakery",
  description: "An Amazing Spot for Cake Lover💖",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
    </ClerkProvider>
  );
}
