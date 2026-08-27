// App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { KeranjangProvider } from "./context/KeranjangContext";

// Menggunakan lazy loading untuk komponen halaman
const Home = lazy(() => import("./pages/Home"));
const DetailProduk = lazy(() => import("./pages/DetailProduk"));
const Keranjang = lazy(() => import("./pages/Keranjang"));

function App() {
  return (
    <KeranjangProvider>
      <BrowserRouter>
        <Suspense fallback={<p className="text-center p-5">Memuat...</p>}>
          <Routes>

            {/* Layout menjadi pembungkus semua halaman */}
            <Route element={<Layout />}>

              <Route path="/" element={<Home />} />

              <Route
                path="/produk/:id"
                element={<DetailProduk />}
              />

              <Route
                path="/keranjang"
                element={<Keranjang />}
              />

            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
    </KeranjangProvider>
  );
}

export default App;