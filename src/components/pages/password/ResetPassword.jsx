import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLock, FaArrowLeft } from "react-icons/fa";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:1000/api/users/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        alert(data.message || "Reset failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-4 py-20">
      <section className="bg-gray-900 rounded-xl w-full max-w-sm p-6">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-yellow-400 hover:underline mb-4"
        >
          <FaArrowLeft />
          Back to Login
        </button>

        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold text-yellow-400 uppercase">LOGO</h1>
          <p className="text-sm mt-1 text-gray-300">
            Enter a new password for your account.
          </p>
        </header>

        {success ? (
          <p className="text-center text-green-400 font-semibold">
            ✅ Password reset successful! Redirecting...
          </p>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label htmlFor="password" className="flex items-center gap-2 text-sm mb-1">
                <FaLock />
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full bg-gray-800 px-3 py-2 pr-10 rounded-md outline-none text-sm"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl text-white"
                >
                  {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 rounded-full"
            >
              Reset Password
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
