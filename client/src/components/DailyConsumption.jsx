import { useState } from "react";
import { FaTint, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

export default function DailyConsumption() {
  const [consumption] = useState(420);
  const limit = 500;

  const percentage = (consumption / limit) * 100;

  return (
    <div className="w-[250px] h-[300px] p-5 rounded-2xl shadow-xl text-center border border-gray-100 flex flex-col justify-between items-center">

      {/* Title */}
      <h1 className="text-xs font-bold text-blue-600 mb-3 ">
        <FaTint className="text-blue-500 inline mr-2" />
        Daily Water Consumption
      </h1>

      {/* Big Value */}
      <p className="text-3xl font-extrabold text-green-600">
        {consumption} L
      </p>

      <p className="text-gray-500 text-xs mt-1">
        Today’s Usage
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 transition-all duration-500 ${
            percentage > 100 ? "bg-red-500" : "bg-blue-500"
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm">
        {consumption > limit ? (
          <>
            <FaExclamationTriangle className="text-red-500" />
            <p className="text-red-600 font-bold">
              Over Limit
            </p>
          </>
        ) : (
          <>
            <FaCheckCircle className="text-green-500" />
            <p className="text-green-600 font-bold">
              Safe Usage
            </p>
          </>
        )}
      </div>

      {/* Footer */}
      <p className="text-[10px] text-gray-400 ">
        Limit: {limit} L/day
      </p>

    </div>
  );
}