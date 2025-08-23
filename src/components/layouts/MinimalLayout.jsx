import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function MinimalLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the last part of the pathname (e.g., "deposit" or "withdraw")
  const pageName = location.pathname.split("/").pop();

  // Capitalize first letter (Deposit, Withdraw)
  const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 py-4 px-2 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:underline text-2xl"
        >
          <IoIosArrowBack />
        </button>
        <h1 className="text-3xl text-white text-center mr-10">{title}</h1>
        <div className="w-8" /> {/* empty space to balance layout */}
      </div>

      {/* Page Content */}
      <div className="w-full flex items-center flex-col flex-1">
        <Outlet />
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 flex justify-end z-50 mb-2 lg:text-3xl">
        <button
          className={`text-white rounded-lg p-4 m-2 mb-8 ${
            title.toLowerCase() === "withdraw" ? "bg-gradient-to-b from-[#FAE59F] to-[#C4933F]" : "bg-gradient-to-b from-[#FAE59F] to-[#be892e]"
          }`}
        >
          {title}
        </button>
      </div>
    </>
  );
}

export default MinimalLayout;
