'use client';
import { useEffect, useState } from 'react';
import GlobalLoader from './GlobalLoader';

export default function AppLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <GlobalLoader />;

  return children;
}
