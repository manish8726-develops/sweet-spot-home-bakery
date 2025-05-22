'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Layout from './_components/Layout';
import ReduxProvider from './_redux/ReduxProvider';
import { useEffect, Suspense } from 'react';
import AppLoaderWrapper from './_components/AppLoaderWrapper';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const publicRoutes = ['/', '/shop/cakes', '/about-us', '/contact'];

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
          <AppLoaderWrapper>
            <ReduxProvider>
              <SpeedInsights />
              <Analytics />
              <Layout>
                {isPublicRoute ? (
                  <Suspense fallback={null}>{children}</Suspense>
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
          </AppLoaderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
