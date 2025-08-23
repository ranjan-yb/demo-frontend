import React from "react";
import {
  FaWallet,
  FaMoneyCheckAlt,
  FaRegCreditCard,
  FaCrown,
} from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { FaBell, FaGift, FaChartBar, FaGlobe } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaCog,
  FaRegCommentDots,
  FaBullhorn,
  FaSmile,
  FaBookOpen,
  FaCube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import useWalletBalance from "../hooks/useWalletBalance";

const Account = () => {
  const navigate = useNavigate();

  const { balance, loading, error, refetch } = useWalletBalance();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [showLogoutConfirm, setShowLogoutConfirm] = React.useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <div className=" flex flex-col items-center ">
        <div className=" flex flex-col items-center pb-10 w-full  pt-0 ">
          {/* Yellow Background Section */}
          <div className="bg-gradient-to-r from-[#FAE59F] to-[#C4933F] py-16 rounded-b-3xl w-full shadow-lg flex justify-center z-0 relative">
            <div className="details flex flex-col items-center space-y-3">
              <h1 className="text-2xl lg:text-4xl font-bold text-white">
                MEMBERNNG6YQPM
              </h1>
              <div className="bg-yellow-700 rounded-lg px-3 py-1 text-white text-sm shadow">
                UID | <span className="font-mono">4032966</span>
              </div>
              <h2 className=" text-sm text-white">
                Last Login:{" "}
                <span className="font-semibold text-white">2025-06-17 21:32:35</span>
              </h2>
            </div>
          </div>

          {/* /* Gray Card Section Positioned Above */ }
                <div className="bg-[#474747] flex flex-col gap-4 items-center shadow-xl py-6 rounded-lg w-[94%] absolute top-[24%] left-1/2 transform -translate-x-1/2 mt-14 ">
                <div className="text-center">
                  <p className="text-gray-400 text-2xl lg:text-3xl font-semibold">
                  Total Balance
                  </p>
                  <p className="text-white text-2xl lg:text-3xl tracking-wide">₹{balance}</p>
                </div>
                <div className="flex gap-4 justify-around w-full px-3">
                  <Link to="/wallet">
                  <div className="flex flex-col items-center">
                  <FaWallet className="text-3xl text-red-500" />
                  <p className="font-semibold text-lg lg:text-3xl text-white">Wallet</p>
                  </div>
                  </Link>
                  <Link to="/wallet/deposit">
                  <div className="flex flex-col items-center">
                  <FaMoneyCheckAlt className="text-3xl text-yellow-500" />
                  <p className="font-semibold text-lg lg:text-3xl text-white">Deposit</p>
                  </div>
                  </Link>
                  <Link to="/wallet/withdraw">           
                  <div className="flex flex-col items-center">
                  <FaRegCreditCard className="text-3xl text-blue-500" />
                  <p className="font-semibold text-lg lg:text-3xl text-white">Withdraw</p>
                  </div>
                   </Link>
                  <div className="flex flex-col items-center">
                  <FaCrown className="text-3xl text-green-500" />
                  <p className="font-semibold text-lg lg:text-3xl text-white">VIP</p>
                  </div>
                </div>
                </div>
              </div>
              </div>

              <div className="secondSection w-full flex flex-col items-center ">
              <div className="4box w-[94%]  mt-40 lg:mt-80 grid grid-cols-2 grid-rows-2 gap-4 items-center md:items-center ">
                <div className=" py-8 px-2 flex bg-[#333332] rounded-lg items-center w-full h-full md:w-full md:h-full ">
                <div className="Logo text-4xl p-1 text-blue-500">
                  <FaCrown />{" "}
                </div>
                <div className="details px-1">
                  <h3 className="font-semibold text-white text-base lg:text-3xl">Game History</h3>
                  <span className="text-gray-400 text-[12px] lg:text-3xl">My game history</span>
                </div>
                </div>
                <div className=" py-8 px-2 flex bg-[#333332] rounded-lg items-center w-full h-full md:w-full md:h-full">
                <div className="Logo text-4xl p-1 text-green-500 ">
                  <FaRegCreditCard />{" "}
                </div>
                <div className="details px-1">
                  <h3 className="font-semibold text-white text-base lg:text-3xl">Transition </h3>
                  <span className="text-gray-400 text-[12px] lg:text-3xl">
                  My transition history
                  </span>
                </div>
                </div>
                <div className=" py-8 px-2 flex bg-[#333332] rounded-lg items-center w-full h-full md:w-full md:h-full">
                <div className="Logo text-4xl p-1 text-red-500">
                  <FaMoneyCheckAlt />{" "}
                </div>
                <div className="details px-1 w-full">
                  <h3 className="font-semibold text-white text-base lg:text-3xl">Deposit</h3>
                  <span className="text-gray-400 text-[12px] lg:text-3xl">
                  My deposit history
                  </span>
                </div>
                </div>
                <div className=" py-8 px-2 flex bg-[#333332] rounded-lg items-center w-full h-full md:w-full md:h-full">
                <div className="Logo text-4xl p-1 text-yellow-500">
                  <FaCrown />{" "}
                </div>
                <div className="details px-1">
                  <h3 className="font-semibold text-white text-base lg:text-3xl">Withdraw</h3>
                  <span className="text-gray-400 text-[12px] lg:text-3xl">
                  My withdraw history
                  </span>
                </div>
                </div>
              </div>

              <div className="thirdSection   items-center text-white mt-2  w-[94%] rounded-lg">
                <div className="bg-[#333332] p-6 rounded-xl w-full font-sans shadow-lg">
                <div className="flex items-center justify-between mb-4 text-white">
                  <div className="flex items-center">
                  <FaBell className="text-yellow-400 mr-3" />
                  <span className="flex-1 text-lg lg:text-3xl">Notification</span>
                  </div>
                  <div>
                  <IoIosArrowForward className="lg:text-3xl" />
                  </div>
                </div>
                <hr className="border-t border-yellow-400 my-4" />
                <div className="flex items-center mb-4 text-white justify-between">
                  <div className="flex items-center">
                  <FaGift className="text-yellow-400 mr-3" />
                  <span className="flex-1 text-lg lg:text-3xl">Gifts</span>
                  </div>
                  <div>
                  <IoIosArrowForward className="lg:text-3xl" />
                  </div>
                </div>
                <hr className="border-t border-yellow-400 my-4" />
                <div className="flex items-center mb-4 text-white justify-between">
                  <div className="flex items-center">
                  <FaChartBar className="text-yellow-400 mr-3" />
                  <span className="flex-1 text-lg lg:text-3xl">Game statistics</span>
                  </div>
                  <div>
                  <IoIosArrowForward className="lg:text-3xl" />
                  </div>
                </div>
                <hr className="border-t border-yellow-400 my-4" />
                <div className="flex items-center text-white justify-between">
                  <div className="flex items-center">
                  <FaGlobe className="text-yellow-400 mr-3" />
                  <span className="flex-1 text-lg lg:text-3xl">Language</span>
                  </div>
                  <span className="lg:text-3xl">English</span>
                </div>
                </div>
              </div>

              <div className="fourSection   items-center text-white mt-2  w-[94%] rounded-lg">
                <div className="bg-[#333332] p-3 rounded-xl w-full font-sans text-white space-y-4 grid grid-rows-2 grid-cols-3 items-center">
                <div className="flex items-center flex-col">
                  <FaCog className="text-yellow-400 lg:text-3xl" />
                  <span className="flex-1 text-center lg:text-3xl">Settings</span>
                </div>
                <div className="flex items-center flex-col">
                  <FaRegCommentDots className="text-yellow-400 lg:text-3xl" />
                  <span className="flex-1 lg:text-3xl">Feedback</span>
                </div>
                <div className="flex items-center flex-col">
                  <FaBullhorn className="text-yellow-400 lg:text-3xl" />
                  <span className="flex-1 text-center lg:text-3xl">Announcement</span>
                </div>
                <div className="flex items-center flex-col">
                  <FaSmile className="text-yellow-400 lg:text-3xl" />
                  <span className="flex-1 text-center lg:text-3xl">Customer Service</span>
                </div>
                <div className="flex items-center flex-col">
                  <FaBookOpen className="text-yellow-400 lg:text-3xl" />
                  <span className="flex-1 text-center lg:text-3xl">Beginner's Guide</span>
                </div>
                <div className="flex items-center flex-col">
                  <FaCube className="text-yellow-400 lg:text-3xl" />
                  <span className="flex-1 text-center lg:text-3xl">About us</span>
                </div>
                </div>
              </div>

              {/* Logout Button */}
        <button
          onClick={handleLogoutClick}
          className="mt-10 px-6 py-2 w-[94%] rounded-2xl shadow border-2 border-yellow-400 text-yellow-400 hover:border-yellow-600 transition cursor-pointer mb-30 lg:mb-50 lg:text-3xl"
        >
          Logout
        </button>

        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-white rounded-xl p-6 shadow-lg w-80 lg:w-120 text-center">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 lg:text-2xl">Confirm Logout</h2>
              <p className="mb-6 text-gray-600">Are you sure you want to logout?</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleConfirmLogout}
                  className="px-4 py-2 bg-yellow-400 text-white rounded-lg font-semibold hover:bg-yellow-500"
                >
                  Yes, Logout
                </button>
                <button
                  onClick={handleCancelLogout}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
