import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const location = useLocation();

  // Update login state when route changes (useful after login/logout)
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);

  return (
    <header className="bg-[#333332] shadow-lg ">
      <nav className="container mx-auto px-4  flex items-center justify-center ">
        <Link to="/" className="flex items-center gap-2">
          <div className="logo text-2xl font-bold text-yellow-400 text-center   tracking-wide drop-shadow-lg md:text-6xl w-full">
            DEMO ACCOUNT
          </div>

        </Link>
        {!isLoggedIn && (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-gradient-to-b from-[#FAE59F] to-[#C4933F] text-[#8F5206] font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-100 transition-colors duration-200 md:text-2xl"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-b from-[#FAE59F] to-[#C4933F] text-[#8F5206] font-semibold px-5 py-2 rounded-lg shadow hover:bg-green-100 transition-colors duration-200 md:text-2xl"
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
