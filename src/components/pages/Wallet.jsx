import React from "react";
import {
  FaWallet,
  FaMoneyCheckAlt,
  FaDownload,
  FaHistory,
  FaExchangeAlt,
} from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import useWalletBalance from "../hooks/useWalletBalance";

const Wallet = () => {

    const { balance, loading, error, refetch } = useWalletBalance();

  // Replace this with your actual authentication logic
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className=" flex justify-center items-center p-4 py-10 pb-40 pt-14 ">
      <div className=" w-full  rounded-xl shadow-lg overflow-hidden">
        {/* Home Link */}
        <div className="p-4 bg-[#333332] w-full">
          <Link
            to="/"
            className="text-yellow-400 font-semibold hover:underline lg:text-3xl"
          >
            &larr; Home
          </Link>
        </div>
        {/* Header */}
        <div className="bg-[#333332] text-white text-center py-6 ">
          <FaWallet className="mx-auto text-3xl mb-2 lg:text-3xl" />
          <h2 className="text-lg font-semibold lg:text-3xl">Wallet</h2>
          <p className="text-2xl font-bold mt-1 lg:text-3xl">₹{balance}</p>
          <p className="text-sm lg:text-3xl">Total balance</p>
        </div>

        {/* Wallet Breakdown */}
        <div className="bg-[#333332] text-white py-6 px-4">
          <div className="flex justify-between items-center mb-6">
            {/* Main Wallet */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <div className="w-full h-full rounded-full border-4 text-gray-400 flex items-center justify-center text-xl font-bold lg:text-2xl">
                  100%
                </div>
              </div>
              <p className="mt-2 font-semibold lg:text-3xl">₹{balance}</p>
              <p className="text-sm text-gray-300 lg:text-3xl">Main wallet</p>
            </div>

            {/* 3rd Party Wallet */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <div className="w-full h-full rounded-full border-4 border-gray-600 flex items-center justify-center text-xl font-bold text-gray-400  lg:text-2xl">
                  0%
                </div>
              </div>
              <p className="mt-2 font-semibold lg:text-3xl">₹0.00</p>
              <p className="text-sm text-gray-400 lg:text-3xl">3rd party wallet</p>
            </div>
          </div>

          {/* Transfer Button */}
          <button className="w-full  bg-gradient-to-r from-[#FAE59F] to-[#C4933F] text-gray-900 font-semibold py-2 rounded-full mb-4 hover:opacity-90 transition lg:text-3xl">
            Main wallet transfer
          </button>

          {/* Action Buttons */}
          <div className="grid grid-cols-4 gap-3 text-center text-sm">
            <Link to="/wallet/deposit">
              <div className="flex flex-col items-center">
                <FaMoneyCheckAlt className="text-yellow-500 text-2xl mb-1 lg:text-4xl" />
                <span className="lg:text-3xl">Deposit</span>
              </div>
            </Link>

              <Link to="/wallet/withdraw"> 
            <div className="flex flex-col items-center">
              <FaDownload className="text-blue-500 text-2xl mb-1 lg:text-4xl" />
              <span className="lg:text-3xl">Withdraw</span>
            </div>
             </Link>
            <div className="flex flex-col items-center">
              <FaHistory className="text-red-400 text-2xl mb-1 lg:text-4xl" />
              <span className="lg:text-3xl">Deposit history</span>
            </div>
            <div className="flex flex-col items-center">
              <FaExchangeAlt className="text-green-400 text-2xl mb-1 lg:text-4xl" />
              <span className="lg:text-3xl">Withdrawal history</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
