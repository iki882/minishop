import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!form.email.includes("@")) {
      setError("Email tidak valid");
      return;
    }

    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    const hasil = login(form.email, form.password);

    if (!hasil.berhasil) {
      setError(hasil.pesan);
      return;
    }

    // Login berhasil
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Masuk ke akun MiniShop kamu
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              placeholder="Masukkan email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              placeholder="Masukkan password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        {/* Link Registrasi */}
        <p className="text-center text-gray-600 mt-6">
          Belum punya akun?{" "}

          <Link
            to="/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Registrasi
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;