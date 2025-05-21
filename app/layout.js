'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Layout from './_components/Layout';
import ReduxProvider from './_redux/ReduxProvider';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define public (unauthenticated) routes
  const publicRoutes = [
    '/shop/cakes',
    '/',
    '/about-us',
    '/contact',
   
  ];

  // Helper to check if route is public
  const isPublicRoute = publicRoutes.some(route => {
    if (route.endsWith('*')) {
      return pathname.startsWith(route.replace('*', ''));
    }
    return pathname === route;
  });

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ReduxProvider>
            <SpeedInsights />
            <Analytics />
            <Layout>
              {isPublicRoute ? (
                children
              ) : (
                <>
                  <SignedIn>{children}</SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              )}
            </Layout>
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
