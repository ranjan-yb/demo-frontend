import React, { useState } from "react";
import { FaArrowLeft, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1000/api/users/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSent(true);
      } else {
        alert(data.message || "Something went wrong");
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
            Forgot your password? Don’t worry — we’ll help you reset it.
          </p>
        </header>

        {isSent ? (
          <p className="text-center text-green-400 font-semibold">
            ✅ Reset link has been sent to your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm mb-1">
                <FaUserAlt />
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your registered email"
                className="w-full bg-gray-800 px-3 py-2 rounded-md outline-none text-sm"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 rounded-full"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
