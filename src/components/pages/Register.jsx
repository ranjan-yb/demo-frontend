import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { BsPersonPlusFill } from "react-icons/bs";
import { redirect } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invite, setInvite] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:1000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, confirmPassword, invite }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Registered successfully!");
    } else {
      alert(data.error || "Registration failed.");
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setInvite("");
    window.location.href = "/login";
  };

  return (
    <main className="flex items-center justify-center  text-white p-6 mt-10">
      <section className="bg-[#333332] rounded-xl w-full  p-6" aria-labelledby="register-title">
        <a href="/" className="inline-block mb-4 text-yellow-400 hover:underline text-sm font-medium lg:text-2xl" aria-label="Back to home">
          &larr; Back to Home
        </a>

        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold text-yellow-400 uppercase lg:text-4xl">LOGO</h1>
          <h2 id="register-title" className="text-lg mt-2 text-yellow-400 font-semibold lg:text-2xl">
            Register your email
          </h2>
        </header>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} aria-label="Register form">
          {/* Email */}
          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm mb-1 lg:text-2xl">
              <MdPhoneAndroid />
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your email address"
              className="w-full bg-gray-800 px-3 py-2 rounded-md outline-none text-sm lg:text-2xl"
              autoComplete="email"
              required
            />
          </div>

          {/* Set Password */}
          <div>
            <label htmlFor="password" className="flex items-center gap-2 text-sm mb-1 lg:text-2xl">
              <FaLock />
              Set password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set password"
                className="w-full bg-gray-800 px-3 py-2 pr-10 rounded-md outline-none text-sm lg:text-2xl"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-lg lg:text-2xl"
              >
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="flex items-center gap-2 text-sm mb-1 lg:text-2xl">
              <FaLock />
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="w-full bg-gray-800 px-3 py-2 pr-10 rounded-md outline-none text-sm lg:text-2xl"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-lg lg:text-2xl"
              >
                {showConfirmPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </button>
            </div>
          </div>

          {/* Invite Code */}
          <div>
            <label htmlFor="invite" className="flex items-center gap-2 text-sm mb-1 lg:text-2xl">
              <BsPersonPlusFill />
              Invite code
            </label>
            <input
              id="invite"
              name="invite"
              type="text"
              value={invite}
              onChange={(e) => setInvite(e.target.value)}
              placeholder="Please enter the invitation code"
              className="w-full bg-gray-800 px-3 py-2 rounded-md outline-none text-sm lg:text-2xl"
            />
          </div>

          {/* Privacy Agreement */}
          <label className="flex items-start gap-2 text-sm text-gray-300 lg:text-2xl">
            <input type="checkbox" required className="mt-1 accent-yellow-400 lg:text-2xl" />
            I have read and agree to the{" "}
            <a href="#" className="text-red-500 underline">
              Privacy Agreement
            </a>
          </label>

          {/* Register Button */}
          <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 rounded-full lg:text-2xl">
            Register
          </button>
          {/* Responsive helper text */}
          <p className="block lg:hidden text-xs text-gray-400 text-center mt-2">
            By registering, you agree to our terms and privacy policy.
          </p>
          <p className="hidden lg:block text-base text-gray-400 text-center mt-2">
            By registering, you agree to our terms and privacy policy.
          </p>
          {/* Redirect to Login */}
          <p className="text-center text-sm mt-4 lg:text-2xl">
            I have an account{" "}
            <a href="/login" className="text-yellow-400 font-semibold underline lg:text-3xl">
              Login
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
