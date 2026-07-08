import logo from "../assets/logo.png";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <img src={logo} alt="Grand Duchy Media" className="h-14 mb-4" />
          <p className="text-sm">
            Creative. Strategic. Impactful.
          </p>
        </div>

        <div className="flex gap-5 text-2xl">
          <a
            href="https://wa.me/918398095525"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>

          <a href="#">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-500">
        © 2026 Grand Duchy Media. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;