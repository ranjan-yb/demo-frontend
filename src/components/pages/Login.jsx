import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate(); // ✅ Initialize navigate
  const [tab, setTab] = useState("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from?.pathname || "/";

// State for welcome notification
  const [showWelcome, setShowWelcome] = useState(false);

  // Modified handleLogin to show welcome notification
  const handleLogin = async (e) => {
    e.preventDefault();

    if (tab === "email") {
      try {
        const res = await fetch("http://localhost:1000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          setShowWelcome(true); // Show welcome notification
          setTimeout(() => {
            setShowWelcome(false);
            navigate(from, { replace: true });
          }, 2000); // Show for 2 seconds
        } else {
          alert(data.error || "Login failed");
        }
      } catch (err) {
        console.error(err);
        alert("Something went wrong. Please try again.");
      }
    } else {
      alert("Phone login not implemented yet");
    }
  };

  return (
    <main className="flex items-center justify-center text-white p-4 py-20 md:py-40 min-h-screen bg-gray-900">
      {showWelcome && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-yellow-400 text-black px-8 py-6 rounded-xl shadow-lg text-center text-2xl font-bold">
            🎉 WELCOME!
            <div className="text-base font-normal mt-2">You have successfully logged in.</div>
          </div>
        </div>
      )}
      <section className="bg-[#333332] rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6">
        <a href="/" className="flex items-center gap-2 text-yellow-400 hover:underline mb-4 text-base md:text-xl lg:text-2xl">
          <FaArrowLeft />
          Back to Home
        </a>

        <header className="text-center mb-6">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-yellow-400 uppercase">LOGO</h1>
          <p className="text-xs md:text-sm mt-1 text-gray-300 lg:text-2xl">
            Please log in with your phone number or email
          </p>
          <p className="text-xs md:text-sm text-gray-400 lg:text-2xl">
            If you forget your password, please contact customer service
          </p>
        </header>

        <nav className="flex justify-around border-b border-yellow-500 mb-4">
          <button
            onClick={() => setTab("phone")}
            className={`flex-1 py-2 text-xs md:text-sm font-semibold lg:text-2xl ${
              tab === "phone" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
            }`}
          >
            📱 Phone Number
          </button>
          <button
            onClick={() => setTab("email")}
            className={`flex-1 py-2 text-xs md:text-sm font-semibold lg:text-2xl ${
              tab === "email" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
            }`}
          >
            📧 Email / Account
          </button>
        </nav>

        <form className="space-y-4" onSubmit={handleLogin}>
          {tab === "phone" ? (
            <div>
              <label htmlFor="phone" className="flex items-center gap-2 text-xs md:text-sm mb-1">
                <MdPhoneAndroid />
                Phone Number
              </label>
              <div className="flex bg-gray-800 rounded-md overflow-hidden">
                <select className="bg-gray-700 text-white px-2 py-2 text-xs md:text-sm lg:text-2xl">
                  <option>+91</option>
                  <option>+1</option>
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter number"
                  className="bg-gray-800 flex-1 px-2 py-2 text-xs md:text-sm outline-none lg:text-2xl"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-xs md:text-sm mb-1 lg:text-2xl">
                <FaUserAlt />
                Email / Username
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email or username"
                className="w-full bg-gray-800 px-3 py-2 rounded-md outline-none text-xs md:text-sm lg:text-2xl"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}

          <div>
            <label htmlFor="password" className="flex items-center gap-2 text-xs md:text-sm mb-1 lg:text-2xl">
              <FaLock />
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full bg-gray-800 px-3 py-2 pr-10 rounded-md outline-none text-xs md:text-sm lg:text-2xl"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-lg md:text-xl text-white lg:text-2xl"
              >
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs md:text-sm lg:text-2xl">
            <input type="checkbox" className="accent-yellow-400" defaultChecked />
            Remember password
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 rounded-full text-base md:text-xl lg:text-3xl"
          >
            Log in
          </button>

          <a
            href="/register"
            className="block w-full text-center border border-yellow-500 text-yellow-400 font-semibold py-2 rounded-full text-base md:text-xl lg:text-3xl"
          >
            Register
          </a>
        </form>

        <footer className="flex flex-col sm:flex-row justify-between mt-6 text-xs md:text-sm text-yellow-400 lg:text-2xl gap-2">
          <Link to="/request-reset-code">🔐 Forgot password</Link>
          <a href="#">🛎 Customer Service</a>
        </footer>
      </section>
    </main>
  );
}
