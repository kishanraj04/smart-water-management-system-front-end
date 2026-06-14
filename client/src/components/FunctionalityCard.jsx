import React from "react";

function FunctionalityCard({ autoMode, setAutoMode }) {
  return (
    <div className="p-5 rounded-xl shadow-md border border-gray-300 h-[180px]">
      <h2 className="text-lg font-semibold mb-3 text-blue-600">Auto Mode</h2>

      <label className="flex items-center justify-between">
        <span className="text-gray-600">Enable Auto System</span>

        <label className="flex items-center gap-3 cursor-pointer">
          {/* Hidden input */}
          <input
            type="checkbox"
            checked={autoMode}
            onChange={() => setAutoMode(!autoMode)}
            className="sr-only peer"
          />

          {/* Switch */}
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-colors duration-300 relative">
            <div
              className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-all duration-300
                 peer-checked:translate-x-5"
            ></div>
          </div>

          {/* Label */}
          <span className="text-gray-600 text-sm">
            {autoMode ? " ON" : " OFF"}
          </span>
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
