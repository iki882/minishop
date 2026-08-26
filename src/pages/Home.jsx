// pages/Home.jsx

import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";

function Home() {
  const [produk, setProduk] = useState([]);
  const [kategoriList, setKategoriList] = useState([]);
  const [kataKunci, setKataKunci] = useState("");
  const [kategoriTerpilih, setKategoriTerpilih] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch seluruh daftar produk
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduk(data))
      .catch((err) => console.error(err));

    // 2. Fetch daftar kategori dari API (/products/categories)
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setKategoriList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter gabungan (berdasarkan teks pencarian DAN kategori)
  const produkTersaring = produk.filter((p) => {
    const cocokJudul = p.title.toLowerCase().includes(kataKunci.toLowerCase());
    const cocokKategori = kategoriTerpilih ? p.category === kategoriTerpilih : true;
    return cocokJudul && cocokKategori;
  });

  if (loading) return <p>Memuat Produk...</p>;

  return (
    <div className="home-container">
      {/* Area Filter dan Search Input */}
      <div className="filter-box">
        <input
          type="text"
          placeholder="Cari produk..."
          value={kataKunci}
          onChange={(e) => setKataKunci(e.target.value)}
        />

        {/* Dropdown Filter Kategori */}
        <select
          value={kategoriTerpilih}
          onChange={(e) => setKategoriTerpilih(e.target.value)}
        >
          <option value="">Semua Kategori</option>
          {kategoriList.map((kat, index) => (
            <option key={index} value={kat}>
              {kat}
            </option>
          ))}
        </select>
      </div>

      {/* Render produk yang sudah disaring */}
      <div className="grid-produk">
        {produkTersaring.length > 0 ? (
          produkTersaring.map((p) => (
            <ProdukCard key={p.id} produk={p} />
          ))
        ) : (
          <p>Produk tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}

export default Home;