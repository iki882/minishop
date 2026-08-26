import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { daftarProduk } from "../data/Produk";

function DetailProduk() {
  const { id } = useParams();
  const produk = daftarProduk.find((item) => item.id === Number(id));

  if (!produk) {
    return (
      <div>
        <Header />
        <main className="p-6">Produk tidak ditemukan.</main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold">{produk.nama}</h2>
        <p className="mt-2">{produk.deskripsi}</p>
        <p className="mt-4 text-lg font-semibold">
          Rp {produk.harga.toLocaleString("id-ID")}
        </p>
      </main>
    </div>
  );
}

export default DetailProduk;