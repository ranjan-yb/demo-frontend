import React from "react";
import { FaGamepad, FaMoneyBillWave, FaSignOutAlt } from "react-icons/fa";

const activities = [
  {
    type: "Game Played",
    icon: <FaGamepad className="text-indigo-500 text-xl" />,
    timestamp: "2025-06-18 14:30",
    detail: "Played Lucky Spin",
  },
  {
    type: "Deposit",
    icon: <FaMoneyBillWave className="text-green-500 text-xl" />,
    timestamp: "2025-06-18 13:05",
    detail: "₹1,000 deposited",
  },
  {
    type: "Logout",
    icon: <FaSignOutAlt className="text-red-500 text-xl" />,
    timestamp: "2025-06-18 12:55",
    detail: "User logged out",
  },
];

const ActivityPage = () => {
  return (
    <div className="  text-white p-4 md:p-10 pt-10">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Activity Log</h1>
      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div>{item.icon}</div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold lg:text-3xl">{item.type}</h2>
              <p className="text-gray-400 text-sm lg:text-2xl">{item.detail}</p>
              <span className="text-xs text-gray-500 lg:text-2xl">{item.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;