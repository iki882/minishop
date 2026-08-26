//context/keranjangcontext.jsx

import { createContext, useContext, useState } from "react";

const KeranjangContext = createContext();

export function KeranjangProvider({ children }) {
    const [item,setItem] =useState([]);

    function tambahKeranjang(Produk) {
        setItem((prev) => [...prev, Produk]);
    }

    return (
        <KeranjangContext.Provider value={{ item, tambahKeranjang }}>
            {children}
        </KeranjangContext.Provider>
    );
}

export function useKeranjang(){
    return useContext(KeranjangContext);
}

