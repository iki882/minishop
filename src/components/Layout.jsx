//components/Layout.jsx

import { Outlet } from " react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DetailProduk from "../pages/DetailProduk";

function Layout(){
    return(
        <Route>
        <Header />
        <main>Outlet /</main>
        <footer />
        <Route element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="/Produk/:id" element={<DetailProduk />} />
        <Route path="*" element={<h2>404 - Halaman Tidak Tersedia</h2>} />
        </Route>

    )

}