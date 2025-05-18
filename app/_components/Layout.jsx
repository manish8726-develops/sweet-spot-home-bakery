'use client';
import { usePathname } from "next/navigation";
import Footer from './Footer';
import Navbar from './_Navbar/Navbar';
import OrderNow from './Repeating_components/OrderNow';

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      {children}
      {pathname !== "/shop/cakes" && <OrderNow />}
      <Footer />
    </>
  );
};

export default Layout;
