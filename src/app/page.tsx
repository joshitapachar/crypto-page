"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white gap-10 p-6">
      {/* Header */}
      <nav className="w-full flex justify-between items-center p-4 max-w-5xl">
        <div className="text-2xl font-bold text-[#6b46c1]">Vault</div>
        <ul className="flex gap-6">
          {["Home", "Admin", "Analytics", "Guide", "About"].map((item) => (
            <li key={item} className="hover:underline cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <Image
          src="/hodling.svg"
          alt="Hodling Strategy"
          width={300}
          height={300}
          priority
        />  isn't just a flex,
        <div> it is a{" "}
          <span className="text-[#2563eb]"><Image
          src="/strategy.svg"
          alt="Hodling Strategy"
          width={300}
          height={300}
          priority
        /></span></div>
        </h1>
        <a
  href="/dashboard"
  className="bg-[#6b46c1] text-white px-6 py-2 rounded-lg hover:bg-[#553c9a] transition"
>
  Launch App 🚀
</a>

      </section>
      <Image
          src="/dashboard.svg"
          alt="Hodling Strategy"
          width={300}
          height={300}
          priority
        />
      {/* Mock App Interface
      <section className="bg-[#171717] p-8 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-md">
        <div className="flex justify-between">
          <button className="bg-[#2563eb] px-4 py-2 rounded text-white">
            Deposit
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded text-white">
            Withdraw
          </button>
        </div>

        <div>
          <label className="block mb-2">Deposit</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 rounded bg-[#0a0a0a] border border-gray-600 text-white"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block mb-2">Receive</label>
          <input
            type="text"
            value={`1 DOGE = ${inputValue || "0"} USD`}
            readOnly
            className="w-full p-2 rounded bg-[#171717] border border-gray-600 text-gray-400"
          />
        </div>

        <button className="bg-[#6b46c1] text-white px-6 py-2 rounded hover:bg-[#553c9a] transition">
          Deposit
        </button>
      </section> */}

      {/* Footer */}
      <footer className="mt-auto text-sm text-center">
        Hodling App © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
