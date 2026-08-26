// src/components/ProdukCard.jsx

import { useKeranjang } from "../context/KeranjangContext";
import { useNavigate } from "react-router-dom";

function ProdukCard({ produk }) {
  // Melindungi aplikasi dari error jika data produk belum dimuat
  if (!produk) return null;

  const { tambahKeranjang } = useKeranjang();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition text-center hover:text-blue-500 flex flex-col justify-between">
      <div>
        <img
          src={produk.image || produk.gambar}
          alt={produk.title || produk.nama}
          className="w-24 h-24 object-contain rounded mx-auto"
        />

        <h3 className="font-semibold mt-2 line-clamp-2">
          {produk.title || produk.nama}
        </h3>
      </div>

      <div className="mt-3">
        <p className="text-lg font-bold text-green-600">
          {produk.price
            ? `$${produk.price}`
            : `Rp ${produk.harga?.toLocaleString("id-ID")}`}
        </p>

        <button
          onClick={() => tambahKeranjang(produk)}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Tambah Ke Keranjang
        </button>
      </div>
    </div>
  );
}

export default ProdukCard;