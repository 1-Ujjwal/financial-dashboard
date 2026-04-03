import React from "react";
import Toast from "./components/Toast";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* <Toast /> */}

      <div className="max-w-7xl mx-auto">
        <Header />
      </div>
    </div>
  );
};

export default App;
