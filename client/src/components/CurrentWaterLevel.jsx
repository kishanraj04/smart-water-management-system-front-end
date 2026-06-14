import { useState, useEffect } from "react";
import { FaCircle, FaTint } from "react-icons/fa";

export default function CurrentWaterLevel() {
  // demo data (baad me API se aayega)
  const [waterLevel, setWaterLevel] = useState(65); // percentage

  useEffect(() => {
    // future me yaha real-time API / socket data aayega
    const interval = setInterval(() => {
      setWaterLevel((prev) => {
        let change = Math.floor(Math.random() * 5);
        let newLevel = prev + (Math.random() > 0.5 ? change : -change);

        if (newLevel > 100) newLevel = 100;
        if (newLevel < 0) newLevel = 0;

        return newLevel;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
      <div className="w-[250px] h-[300px] p-4  border border-gray-100 rounded-2xl shadow-xl flex flex-col justify-between">
        {/* Title */}
        <h1 className="text-sm font-bold text-center text-blue-600 py-2">
          <FaTint className="text-blue-500 text-xl inline" /> Current Water Level
        </h1>

        {/* Tank */}
        <div className="relative w-full h-[500px] border-4 border-blue-500 rounded-2xl overflow-hidden bg-blue-50">
          <div
            className="absolute bottom-0 w-full bg-blue-500 transition-all duration-500"
            style={{ height: `${waterLevel}%` }}
          ></div>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-white mix-blend-difference">
              {waterLevel}%
            </h2>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex justify-between text-gray-600 text-lg px-2">
          <span>Empty: 0%</span>
          <span>Full: 100%</span>
        </div>

        {/* Status */}
        <div className="text-center mt-4">
          {waterLevel > 70 ? (
            <p className="text-green-600 font-bold text-xl">Tank is Full <FaCircle className="text-green-500 text-sm inline" /></p>
          ) : waterLevel > 30 ? (
            <p className="text-yellow-500 font-bold text-sm">
              Water Level Normal <FaCircle className="text-yellow-500 text-sm inline" />
            </p>
          ) : (
            <p className="text-red-600 font-bold text-sm">Low Water Level <FaCircle className="text-red-500 text-sm inline" /></p>
          )}
        </div>
   
    </div>
  );
}
