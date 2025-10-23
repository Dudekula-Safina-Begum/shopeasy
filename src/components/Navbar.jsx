import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow">
      {/* 🔹 Left - Brand name */}
      <Link to="/" className="text-2xl font-bold hover:text-yellow-300">
        ShopEasy 🛍️
      </Link>

      {/* 🔹 Right - Navigation Links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"
          }
        >
          Cart 🛒
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
