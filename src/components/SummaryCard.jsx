import React from "react";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";

const SummaryCard = ({ totalIncome, totalExpenses, balance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-linear-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-300 text-sm font-medium uppercase tracking-wide">
              Total Income
            </p>
            <p className="text-4xl font-bold text-emerald-400 mt-2">
              ${totalIncome.toFixed(2)}
            </p>
          </div>
          <div className="p-4 bg-emerald-500/20 rounded-2xl">
            <TrendingUp className="w-8 h-8 text-emerald-400" />
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-3xl p-8 border border-red-500/20 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-red-300 text-sm font-medium uppercase tracking-wide">
              Total Expenses
            </p>
            <p className="text-4xl font-bold text-red-400 mt-2">
              ${totalExpenses.toFixed(2)}
            </p>
          </div>
          <div className="p-4 bg-red-500/20 rounded-2xl">
            <TrendingDown className="w-8 h-8 text-red-400" />
          </div>
        </div>
      </div>

      <div
        className={`bg-linear-to-r ${
          balance >= 0
            ? "from-blue-500/10 to-blue-600/10 border-blue-500/20"
            : "from-orange-500/10 to-orange-600/10 border-orange-500/20"
        } backdrop-blur-sm rounded-3xl p-8 border shadow-xl
      `}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`${balance >= 0 ? "text-blue-300" : "text-orange-300"} text-sm font-medium uppercase tracking-wide`}
            >
              Net Balance
            </p>
            <p className={`text-4xl font-bold text-red-400 mt-2`}>
              ${Math.abs(balance).toFixed(2)}
            </p>
          </div>
          <div
            className={`${balance >= 0 ? "bg-blue-500/20" : "bg-orange-500/20"} p-4 rounded-2xl`}
          >
            <DollarSign
              className={`${balance >= 0 ? "text-blue" : "text-orange-400"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
