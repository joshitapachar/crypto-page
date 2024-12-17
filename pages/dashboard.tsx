"use client";

import { useState } from "react";
import "../src/app/globals.css";

export default function Dashboard() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white p-6 gap-6">
      {/* Top Navigation */}
      <nav className="w-full flex justify-between items-center p-4 max-w-5xl">
        <div className="text-2xl font-bold text-[#6b46c1]">Vault</div>
        <ul className="flex gap-6">
          {["Home", "Admin", "Analytics", "Guide", "About"].map((item) => (
            <li key={item} className="hover:underline cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <button className="bg-[#6b46c1] px-4 py-2 rounded hover:bg-[#553c9a]">
          Connect Wallet
        </button>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Analytics Section */}
        <div className="bg-[#171717] p-6 rounded-lg shadow-lg flex-1">
          <h2 className="text-xl mb-4">Analytics</h2>
          <div className="bg-[#0a0a0a] rounded h-40 flex items-center justify-center mb-4">
            <p className="text-gray-400">No data available</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#2563eb] text-center p-2 rounded">Current Price 0</div>
            <div className="bg-[#2563eb] text-center p-2 rounded">Total Fees 0 M</div>
            <div className="bg-[#2563eb] text-center p-2 rounded">Total Fees 0 M</div>
          </div>
          <button className="mt-4 bg-[#6b46c1] px-4 py-2 rounded">Connect Wallet</button>
        </div>

        {/* Deposit Section */}
        <div className="bg-[#171717] p-6 rounded-lg shadow-lg flex-1">
          <div className="flex gap-4 mb-4">
            <button className="bg-[#2563eb] px-4 py-2 rounded">Deposit</button>
            <button className="bg-gray-700 px-4 py-2 rounded">Withdraw</button>
          </div>
          <div>
            <label className="block mb-2">Deposit</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 rounded bg-[#0a0a0a] border border-gray-600 text-white mb-4"
              placeholder="Enter amount"
            />
            <p className="text-gray-400 mb-4">1 DOGE = 0.890 ms DOGE</p>
          </div>
          <div>
            <label className="block mb-2">Receive</label>
            <input
              type="text"
              value={inputValue}
              readOnly
              className="w-full p-2 rounded bg-[#0a0a0a] border border-gray-600 text-white"
            />
          </div>
          <p className="text-gray-400 mt-4">Vault entry fees 0.80%</p>
        </div>
      </div>
    </div>
  );
}
