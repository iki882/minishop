import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("minishop_user", null);

  const [akun, setAkun] = useLocalStorage("minishop_akun", null);

  function register(data) {
    setAkun({
      nama: data.nama,
      email: data.email,
      password: data.password,
    });
  }

  function login(email, password) {
    if (!akun) {
      return {
        berhasil: false,
        pesan: "Akun belum terdaftar",
      };
    }

    if (akun.email !== email || akun.password !== password) {
      return {
        berhasil: false,
        pesan: "Email atau password salah",
      };
    }

    setUser({
      nama: akun.nama,
      email: akun.email,
    });

    return {
      berhasil: true,
    };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        akun,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}