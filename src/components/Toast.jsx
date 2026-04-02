import { AlertCircle, Check, X } from "lucide-react";
import React from "react";

const Toast = () => {
  return (
    <div className="fixed top-0 right-4 z-50 space-y-2">
      <div
        className={`flex items-center p-4 rounded-lg shadow-lg backdrop-blur-sm border transform transition-all duration-300 easy-in-out`}
      >
        {/*Conditional Rendering */}
        <Check className="w-5 h-5 mr-2 shrink-0" />

        <AlertCircle className="w-5 h-5 mr-2 shrink-0" />

        <AlertCircle className="w-5 h-5 mr-2 shrink-0" />

        <span className="mr-2">Toast Message</span>
        <button className="ml-auto text-gray-300 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
