import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-700 text-gray-300 py-6 mt-10 fixed bottom-0 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* 🔹 Brand Name */}
        <h2 className="text-xl font-bold text-white mb-4 md:mb-0">
          ShopEasy 🛍️
        </h2>

        {/* 🔹 Quick Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/cart" className="hover:text-white transition">
            Cart
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* 🔹 Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ShopEasy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
