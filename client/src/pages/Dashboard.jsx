import React from "react";
import CurrentWaterLevel from "../components/CurrentWaterLevel";
import TankCapacity from "../components/TankCapacity";
import DailyConsumption from "../components/DailyConsumption";
import TankStatus from "../components/TankStatus";

function Dashboard() {
  return (
      <div className="grid grid-cols-1 bg-slate-900 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center bg-amber-200">
        <CurrentWaterLevel />
        <TankCapacity />
        <DailyConsumption />
        <TankStatus />
    </div>
  );
}

export default Dashboard;
