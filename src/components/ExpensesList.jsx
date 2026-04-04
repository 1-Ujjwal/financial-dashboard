import {
  DollarSign,
  Calendar,
  Edit2,
  Tag,
  Trash2,
  TrendingUp,
} from "lucide-react";
import React from "react";

const ExpensesList = () => {
  return (
    <div className="p-8 max-h-96 overflow-y-auto">
      <div className="text-center py-16">
        <div className="p-6 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-3xl inline-block mb-6">
          <DollarSign className="w-16 h-16 text-purple-400" />
        </div>
        <p className="text-gray-300 text-xl mb-2">No entries found</p>
        <p className="text-gray-500">Start by adding your first transaction</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-200">
          <div className="flex items-center space-x-6">
            <div className={`p-3 rounded-2xl`}>
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-white text-lg">
                Expenses Description
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400 mt-1">
                <span className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  Expense Category
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className={`font-bold text-2xl`}>
              {/* Conditinoal rendering */} $45.00
            </span>
            <div className="flex space-x-2">
              <button className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 rounded-xl transition-all duration-200">
                <Edit2 className="w-5 h-5" />
              </button>
              <button className="p-3 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-xl transition-all duration-200">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
