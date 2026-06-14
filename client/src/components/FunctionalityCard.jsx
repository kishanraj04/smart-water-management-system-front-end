import React from "react";

function FunctionalityCard({ autoMode, setAutoMode }) {
  return (
    <div className="p-5 rounded-xl shadow-md border border-gray-300 h-[180px]">
      <h2 className="text-lg font-semibold mb-3 text-blue-600">Auto Mode</h2>

      <label className="flex items-center justify-between">
        <span className="text-gray-600">Enable Auto System</span>

        <label className="flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => setAutoMode(!autoMode)}
            className={`w-12 h-6 rounded-full p-1 transition-all ${
              autoMode ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-all ${
                autoMode ? "translate-x-6" : ""
              }`}
            />
          </div>

          <span>{autoMode ? "ON" : "OFF"}</span>
        </label>
      </label>

      <p className="text-sm mt-3 text-gray-500">
        {autoMode
          ? "Auto mode is ON (System controls motor automatically)"
          : "Auto mode is OFF"}
      </p>
    </div>
  );
}

export default FunctionalityCard;
