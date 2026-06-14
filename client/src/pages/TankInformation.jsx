import React from "react";
import TankInfoCard from "../components/TankInfoCard";

const tankData = [
  { id: 1, label: "Tank Name", value: "Main Tank" },
  { id: 2, label: "Capacity", value: "5000", suffix: "Ltr" },
  { id: 3, label: "Location", value: "Building A - Roof" },
  { id: 4, label: "Filled", value: "3200", suffix: "Ltr" },
];

export default function TankInformation() {
  return (
    <div className="p-6 min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tankData.map((item) => (
          <TankInfoCard
            key={item.id}
            label={item.label}
            value={item.value}
            suffix={item.suffix}
          />
        ))}
      </div>
    </div>
  );
}