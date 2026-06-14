import React, { useState } from "react";
import FunctionalityCard from "../components/FunctionalityCard";
export default function Functionality() {
  const [autoMode, setAutoMode] = useState(false);
  const [manualMotor, setManualMotor] = useState(false);
  const [schedule, setSchedule] = useState("");

  return (
    <div className="p-6 min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* AUTO MODE CARD (REUSABLE) */}
        <FunctionalityCard autoMode={autoMode} setAutoMode={setAutoMode} />

        {/* MANUAL MOTOR */}
        <div className="p-5 rounded-xl shadow-md border border-gray-300 h-[180px]">
          <h2 className="text-lg font-semibold mb-3 text-blue-600">Manual Motor</h2>

          <label className="flex items-center justify-between">
            <span className="text-gray-600 ">Motor Switch</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={manualMotor}
                onChange={() => setManualMotor(!manualMotor)}
                disabled={autoMode}
                className="sr-only peer"
              />

              {/* Switch background */}
              <div
                className="w-11 h-6 bg-gray-300 peer-checked:bg-green-500 rounded-full 
               peer transition-colors duration-300
               peer-disabled:opacity-50"
              ></div>

              {/* Circle */}
              <div
                className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
               transition-all duration-300
               peer-checked:translate-x-5"
              ></div>

              <span className="ml-3 text-sm text-gray-600">
                {manualMotor ? "ON" : "OFF"}
              </span>
            </label>
          </label>

          <p className="text-sm mt-3 text-gray-500">
            {autoMode
              ? "Disabled (Auto Mode Active)"
              : manualMotor
                ? "Motor is ON"
                : "Motor is OFF"}
          </p>
        </div>

        {/* SCHEDULE MOTOR */}
        <div className=" p-5 rounded-xl shadow-md border border-gray-300 h-[180px]">
          <h2 className="text-lg font-semibold mb-3 text-blue-600">Schedule Motor</h2>

          <input
            type="time"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <p className="text-sm mt-3 text-gray-500 ">
            Scheduled Time: {schedule || "Not set"}
          </p>
        </div>

        {/* WATER ALERT SYSTEM */}
        <div className=" p-5 rounded-xl shadow-md border border-gray-300 h-[180px]">
          <h2 className="text-lg font-semibold mb-3 text-blue-600" >Water Alert System</h2>

          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Test Alert
          </button>
        </div>

        {/* SYSTEM STATUS */}
        <div className=" p-5 rounded-xl shadow-md border border-gray-300">
          <h2 className="text-lg font-semibold mb-3 text-blue-600">System Status</h2>
          <p className="text-green-600 font-bold">● System Online</p>
        </div>

        {/* EMERGENCY STOP */}
        <div className="p-5 rounded-xl shadow-md border border-gray-300 h-[180px]">
          <h2 className="text-lg font-semibold mb-3 text-blue-600">Emergency Stop</h2>
          <button className="bg-black text-white px-4 py-2 rounded w-full">
            STOP ALL MOTORS
          </button>
        </div>
      </div>
    </div>
  );
}
