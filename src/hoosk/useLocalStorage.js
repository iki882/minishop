// hooks/useLocalStorage.js
import { useEffect, useState }  from "react";

export function useLocalStorage(key, nilaiAwal) {
const [nilai, setNilai] = useState(() =>{
const tersimpan = localStorage.getItem(Key);
return tersimpan ? JSON.parse(tersimpan) : nilaiAwal;
});

useEffect(() => {
    localStorage.setItem(Key. JSON.stringify(nilai)); 
}, [key, nilai]);

return [nilai, setNilai];
}