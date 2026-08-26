// App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { KeranjangProvider } from "./context/KeranjangContext";

// Menggunakan lazy loading untuk komponen halaman
const Home = lazy(() => import("./pages/Home"));
const DetailProduk = lazy(() => import("./pages/DetailProduk"));
const Keranjang = lazy(() => import("./pages/Keranjang"));

function App() {
  return (
    <KeranjangProvider>
      <BrowserRouter>
        <div>
          <Header />
          <main>
            {/* Suspense membungkus Routes untuk menangani proses loading */}
            <Suspense fallback={<p className="text-center p-5">Memuat...</p>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produk/:id" element={<DetailProduk />} />
                <Route path="/keranjang" element={<Keranjang />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </KeranjangProvider>
  );
}

export default App;