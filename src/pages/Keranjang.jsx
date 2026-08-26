import { useKeranjang } from "../context/KeranjangContext";

function Keranjang() {
  const { item } = useKeranjang();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Keranjang Belanja
      </h1>

      {item.length === 0 ? (
        <p className="text-gray-500">
          Keranjang masih kosong.
        </p>
      ) : (
        <div className="grid gap-4">
          {item.map((produk, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-center gap-4 shadow"
            >
              <img
                src={produk.image || produk.gambar}
                alt={produk.title || produk.nama}
                className="w-20 h-20 object-contain"
              />

              <div>
                <h2 className="font-semibold">
                  {produk.title || produk.nama}
                </h2>

                <p className="text-green-600 font-bold">
                  {produk.price
                    ? `$${produk.price}`
                    : `Rp ${produk.harga?.toLocaleString("id-ID")}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Keranjang;