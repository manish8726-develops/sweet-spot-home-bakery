import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
import Divider from "./Divider";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#4a3c32] text-white px-6 py-10 text-sm">
      <Divider />
      <div className="max-w-[1400px] pt-4 mx-auto grid md:grid-cols-5 grid-cols-1 gap-8">
        {/* Logo and Social */}
        <div className="flex flex-col items-start gap-4">
          <Image src="/footer-logo.webp" draggable={false} alt="logo" className="rounded-xl" width={180} height={80} />
          <div className="h-[3px] w-12 bg-white mt-2 mb-1" />
          <h2 className="text-lg font-bold">Shubhs Wonder Kitchen</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-[#bd2262] p-3 rounded-full text-white">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-[#bd2262] p-3 rounded-full text-white">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* GSC */}
        <div>
          <h3 className="mb-2 text-base font-bold">TCD @ GSC</h3>
          <p>
            The Cookie Dough, First Floor, Goregaon Sports Club New Link Rd, near
            Toyota showroom, Malad, Mindspace, Malad West, Mumbai, Maharashtra
            40006
          </p>
        </div>

        {/* Malad */}
        <div>
          <h3 className="mb-2 text-base font-bold">TCD Malad</h3>
          <p>
            Ground Floor 1, Parmeshwar Premises, Vibgyor School Road, Chincoli
            Bunder Rd, off New Link Road, next to Hunky Dory, Mindspace, Malad
            West, Mumbai, Maharashtra 400064
          </p>
        </div>

        {/* Studio */}
        <div>
          <h3 className="mb-2 text-base font-bold">TCD Studio</h3>
          <p>
            321, 3rd Floor, Ijmima Ijmima Complex, Malad, Mindspace, Malad West,
            Mumbai, Maharashtra 400064
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="mb-2 text-base font-bold">Contact Us</h3>
          <div className="flex items-center gap-2 mb-1">
            <MdEmail /> <span>shubhswonder@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <MdEmail /> <span>owner@cookiedoughcafe.in</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <MdPhone /> <span>+91 86556 69376</span>
          </div>
          <div className="flex items-center gap-2">
            <MdAccessTime /> <span>11 am to 1:30 am</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between pt-4 mt-8 text-xs border-t border-white/30 md:flex-row">
        <p>Copyright@2024 SHUBH'S WONDER KITCHEN</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
