import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-6">
      <div className="container mx-auto flex flex-col gap-4 items-center  px-4">
        <nav className="flex items-center gap-4 text-gray-400">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/movies" className="hover:text-white">
            Movies
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="#" className="hover:text-white">
            <div className="px-3 py-2 bg-red-600 rounded-md text-white hover:bg-red-700"> Sign up</div>
          </Link>
        </nav>

        <div className="flex gap-4">
          <a href="#" className="hover:text-red-500">
            <Facebook />
          </a>
          <a href="#" className="hover:text-red-500">
            <Instagram />
          </a>
          <a href="#" className="hover:text-red-500">
            <Twitter />
          </a>
          <a href="#" className="hover:text-red-500">
            <Youtube />
          </a>
        </div>
        <div className="text-center text-gray-500  text-sm">
          © 2025 Movier. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
