import { useState } from "react";
import { FaCircle } from "react-icons/fa";

export default function TankStatus() {
  // demo status (future me API/sensor se aayega)
  const [status] = useState("Normal"); 
  // options: Full | Normal | Low | Empty

  const getStatusUI = () => {
    switch (status) {
      case "Full":
        return { color: "text-green-500", label: "Tank Full" };

      case "Normal":
        return { color: "text-blue-500", label: "Water Level Normal" };

      case "Low":
        return { color: "text-yellow-500", label: "Low Water Level" };

      case "Empty":
        return { color: "text-red-500", label: "Tank Empty" };

      default:
        return { color: "text-gray-500", label: "Unknown Status" };
    }
  };

  const ui = getStatusUI();

  return (

      <div className="w-[250px] h-[300px]  border border-gray-100  p-6 rounded-2xl shadow-xl text-center">

        {/* Title */}
        <h1 className="text-xl font-bold text-blue-600 mb-6">
          🛢 Tank Status
        </h1>

        {/* Status Icon */}
        <div className="flex flex-col items-center gap-3">

          <FaCircle className={`${ui.color} text-4xl animate-pulse`} />

          <h2 className={`text-2xl font-bold ${ui.color}`}>
            {ui.label}
          </h2>

        </div>

        {/* Info Box */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
          Smart system monitoring your tank in real time.
        </div>

    </div>
  );
}