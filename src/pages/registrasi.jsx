import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
  });

  const [error, setError] = useState("");
  const [berhasil, setBerhasil] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setBerhasil(false);

    if (
      !formData.nama ||
      !formData.email ||
      !formData.password ||
      !formData.konfirmasiPassword
    ) {
      setError("Semua bidang harus diisi!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password minimal harus 6 karakter!");
      return;
    }

    if (formData.password !== formData.konfirmasiPassword) {
      setError("Konfirmasi password tidak cocok!");
      return;
    }

    console.log("Data pendaftaran:", formData);

    setBerhasil(true);

    setFormData({
      nama: "",
      email: "",
      password: "",
      konfirmasiPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Registrasi
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Buat akun MiniShop baru
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded">
            {error}
          </div>
        )}

        {berhasil && (
          <div className="mb-4 p-3 bg-green-100 text-green-600 rounded">
            Registrasi berhasil! Silakan login.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Nama Lengkap
            </label>

            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimal 6 karakter"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Konfirmasi Password
            </label>

            <input
              type="password"
              name="konfirmasiPassword"
              value={formData.konfirmasiPassword}
              onChange={handleChange}
              placeholder="Ulangi password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Registrasi
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;