import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaLock, FaArrowLeft } from "react-icons/fa";

export default function VerifyResetCode() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1000/api/users/verify-reset-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        alert(data.message || "Verification failed");
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
            Enter the code sent to your email and your new password.
          </p>
        </header>

        {success ? (
          <p className="text-center text-green-400 font-semibold">
            ✅ Password reset successful! Redirecting to login...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm mb-1 block">Verification Code</label>
              <input
                type="text"
                className="w-full bg-gray-800 px-3 py-2 rounded-md outline-none text-sm"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">New Password</label>
              <input
                type="password"
                className="w-full bg-gray-800 px-3 py-2 rounded-md outline-none text-sm"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
