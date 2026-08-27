import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-orange-400">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-white"
      >
        MiniShop
      </Link>

      {/* Menu */}
      <nav className="flex items-center gap-3">

        {/* Beranda */}
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-b-full hover:bg-blue-700 transition duration-300"
        >
          Beranda
        </Link>

        {/* Produk */}
        <Link
          to="/produk/1"
          className="bg-purple-500 text-white px-6 py-2 rounded-b-full hover:bg-purple-700 transition duration-300"
        >
          Produk
        </Link>

        {/* Keranjang */}
        <Link
          to="/keranjang"
          className="bg-green-500 text-white px-6 py-2 rounded-b-full hover:bg-green-700 transition duration-300"
        >
          Keranjang
        </Link>

        {/* Login */}
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-b-full hover:bg-blue-700 transition duration-300"
        >
          Login
        </Link>

        {/* Registrasi */}
        <Link
          to="/register"
          className="bg-red-500 text-white px-6 py-2 rounded-b-full hover:bg-red-700 transition duration-300"
        >
          Registrasi
        </Link>

      </nav>
    </header>
  );
}

export default Header;