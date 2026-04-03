import { Wallet } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="p-4 bg-linear-to-r from emerald-500 to-blue-500 rounded-2xl shadow-lg">
          <Wallet className="w-12 h-12 text-white" />
        </div>
      </div>
      <h1 className="text-5xl font-bold bg-linear-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
        MoneyFlow
      </h1>
      <p className="text-gray-300 text-xl">Master your finance with style</p>
    </div>
  );
};

export default Header;
