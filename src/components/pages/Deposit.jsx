import React, { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";


const amounts = [200, 500, 1000, 5000, 10000, 50000];


function Deposit() {
    const [selectedAmount, setSelectedAmount] = useState(200);



  return (
    <>
      <div className="bg-gradient-to-b from-[#FAE59F] to-[#C4933F] w-[94%] mx-auto p-6 rounded-2xl shadow-lg h-48 flex flex-col justify-between relative">
        <div className="flex items-center justify-between">
          <FaRegCreditCard className="text-3xl text-yellow-700 opacity-80 lg:text-5xl" />
          <span className="text-yellow-700 font-semibold text-lg lg:text-2xl">Balance</span>
        </div>
        <div className="flex flex-col items-end mt-8">
          <p className="text-yellow-700 text-3xl font-bold tracking-widest lg:text-5xl">0.00</p>
          <span className="text-yellow-700 text-xs opacity-80 mt-2 lg:text-2xl">USD</span>
        </div>
        <div className="absolute bottom-4 left-6 text-yellow-700 text-xs opacity-60 lg:text-2xl">
          **** **** **** 1234
        </div>
      </div>

          <div className="bg-gray-900 w-[94%] text-white p-6 rounded-xl  mt-5 mb-10 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-center lg:text-2xl">Choose Deposit Amount</h3>
      
      <div className="grid grid-cols-3 gap-3 mb-5">
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => setSelectedAmount(amt)}
            className={`py-2 rounded-lg font-bold transition lg:text-2xl
              ${selectedAmount === amt 
                ? 'bg-gradient-to-r from-[#FAE59F] to-[#C4933F] text-black' 
                : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            ₹{amt >= 1000 ? `${amt / 1000}K` : amt}
          </button>
        ))}
      </div>

      <label className="block  text-sm text-gray-400 lg:text-2xl">Or enter custom amount</label>
      <input
        type="number"
        value={selectedAmount}
        onChange={(e) => setSelectedAmount(Number(e.target.value))}
        className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 lg:text-2xl"
      />
    </div>


        <div className="w-[94%] bg-gray-800 text-white p-5 rounded-lg shadow-lg mt-0 mb-30">
      <h2 className="text-xl font-semibold mb-4">Recharge instructions</h2>
      <div className="bg-[#374151] p-4 rounded-md space-y-3 text-sm leading-relaxed lg:text-2xl">
        <ul className="list-disc list-inside">
          <li>If the transfer time is up, please fill out the deposit form again.</li>
          <li>The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</li>
          <li>If you transfer the wrong amount, our company will not be responsible for the lost amount!</li>
          <li>Note: do not cancel the deposit order after the money has been transferred.</li>
        </ul>
      </div>
    </div>

    </>
  );
}

export default Deposit;
