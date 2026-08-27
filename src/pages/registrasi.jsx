// src/pages/Register.jsx

import { useState } from "react";

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

    // Validasi sederhana
    if (!formData.nama || !formData.email || !formData.password) {
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

    // Jika validasi lolos
    console.log("Data pendaftaran:", formData);
    setBerhasil(true);
    
    // Reset form
    setFormData({
      nama: "",
      email: "",
      password: "",
      konfirmasiPassword: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Daftar Akun Baru
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded">
          {error}
        </div>
      )}

      {berhasil && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 text-sm rounded">
          Registrasi berhasil! Silakan login.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nama@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimal 6 karakter"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Konfirmasi Password
          </label>
          <input
            type="password"
            name="konfirmasiPassword"
            value={formData.konfirmasiPassword}
            onChange={handleChange}
            placeholder="Ulangi password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}

export default Register;