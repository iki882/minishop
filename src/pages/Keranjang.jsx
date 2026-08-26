// src/pages/Keranjang.jsx

import { useKeranjang } from "../context/KeranjangContext";

function Keranjang() {
 const { item } = useKeranjang();

 const total = item.reduce((sum, p) => sum + p.harga, 0);

return (
   <div className="p-6">
     <h2 className="text-2xl font-bold mb-4">
        Keranjang Belanja
       </h2>

   {item.length === 0 ? (
  <p>Keranjang masih kosong.</p>
            ) : (
                <>
    {item.map((p, i) => (
               <div key={i} className="border-b py-2">
          {p.nama} - Rp {p.harga.toLocaleString("id-ID")}
        </div>
         ))}

          <h3 className="text-xl font-bold mt-4">
             <strong>
         Total: Rp {total.toLocaleString("id-ID")}
  </strong>
  </h3>
    </>
            )}
        </div>
    );
}

export default Keranjang;