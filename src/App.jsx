import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import { KeranjangProvider } from "./context/KeranjangContext";
import { AuthProvider } from "./context/AuthContext";

// Lazy loading halaman
const Home = lazy(() => import("./pages/Home"));
const DetailProduk = lazy(() => import("./pages/DetailProduk"));
const Keranjang = lazy(() => import("./pages/Keranjang"));

const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/registrasi"));

function App() {
  return (
    <AuthProvider>
      <KeranjangProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <p className="text-center p-5">
                Memuat...
              </p>
            }
          >
            <Routes>

              {/* Layout */}
              <Route element={<Layout />}>

                {/* Beranda */}
                <Route
                  path="/"
                  element={<Home />}
                />

                {/* Detail produk */}
                <Route
                  path="/produk/:id"
                  element={<DetailProduk />}
                />

                {/* Keranjang */}
                <Route
                  path="/keranjang"
                  element={<Keranjang />}
                />

                {/* Login */}
                <Route
                  path="/login"
                  element={<Login />}
                />

                {/* Registrasi */}
                <Route
                  path="/register"
                  element={<Register />}
                />

              </Route>

            </Routes>
          </Suspense>
        </BrowserRouter>
      </KeranjangProvider>
    </AuthProvider>
  );
}

export default App;