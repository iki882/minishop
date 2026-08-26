//components/Header.jsx
import Footer from "./Footer.jsx";

function Header(){
    return (

        <header className="flex justify-between items-center px-8 py-4 shadow-md bg-orange-400">
            <h1 className="text-2xl font-bold text-white">
            MiniShop</h1>

            <h1 className="text-2xl font-semibold text-white right-0">
            Produk</h1>
            <nav>
                <div className="text-right mix-blend-color:green-text">
                <a href="#" className="bg-blue-500 text-white px-8 py-2 rounded-b-full hover:bg-blue-700 transition duration-300">Beranda</a>
                <a href="#" className="bg-green-500 text-white px-8 py-2 rounded-b-full hover:bg-green-700 transition duration-300 row-auto">Keranjang</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;