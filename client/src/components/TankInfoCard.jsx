import React from "react";

function TankInfoCard({ label, value, suffix }) {
  return (
    <div className="border border-gray-100 p-5 rounded-xl shadow-md ">
      
      {/* Title */}
      <p className="text-sm text-gray-500">{label}</p>

      {/* Value */}
      <h2 className="text-lg font-bold text-blue-600">
        {value} {suffix}
      </h2>
    </div>
  );
}

export default TankInfoCard;