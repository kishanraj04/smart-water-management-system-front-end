import React, { useState } from "react";

const alertsData = [
  {
    id: 1,
    type: "Low Water Level",
    message: "Main Tank water level is below 20%",
    severity: "Warning",
    time: "10:30 AM",
    status: "Active",
  },
  {
    id: 2,
    type: "Tank Overflow",
    message: "Tank is almost full (98%)",
    severity: "Critical",
    time: "11:15 AM",
    status: "Active",
  },
  {
    id: 3,
    type: "Motor Started",
    message: "Motor started automatically",
    severity: "Info",
    time: "08:00 AM",
    status: "Resolved",
  },
  {
    id: 4,
    type: "Sensor Offline",
    message: "Tank sensor is not responding",
    severity: "Critical",
    time: "09:45 AM",
    status: "Active",
  },
];

export default function Alerts() {
  const [filter, setFilter] = useState("All");

  const filteredAlerts =
    filter === "All"
      ? alertsData
      : alertsData.filter(
          (alert) =>
            alert.severity === filter ||
            alert.status === filter
        );

  const totalAlerts = alertsData.length;
  const criticalAlerts = alertsData.filter(
    (a) => a.severity === "Critical"
  ).length;
  const warningAlerts = alertsData.filter(
    (a) => a.severity === "Warning"
  ).length;
  const resolvedAlerts = alertsData.filter(
    (a) => a.status === "Resolved"
  ).length;

  const getBadgeColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-600";
      case "Warning":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-blue-100 text-blue-600";
    }
  };

  return (
    <div className="p-6 min-h-screen">
      

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="border border-gray-50 p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Alerts</p>
          <h2 className="text-3xl font-bold">{totalAlerts}</h2>
        </div>

        <div className="border border-gray-50 p-5 rounded-xl shadow">
          <p className="text-gray-500">Critical Alerts</p>
          <h2 className="text-3xl font-bold text-red-600">
            {criticalAlerts}
          </h2>
        </div>

        <div className="border border-gray-50 p-5 rounded-xl shadow">
          <p className="text-gray-500">Warning Alerts</p>
          <h2 className="text-3xl font-bold text-yellow-600">
            {warningAlerts}
          </h2>
        </div>

        <div className="border border-gray-50 p-5 rounded-xl shadow">
          <p className="text-gray-500">Resolved Alerts</p>
          <h2 className="text-3xl font-bold text-green-600">
            {resolvedAlerts}
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {[
          "All",
          "Critical",
          "Warning",
          "Info",
          "Active",
          "Resolved",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-lg ${
              filter === item
                ? "bg-blue-600 text-white"
                : "border border-gray-50 shadow"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-gray-50 p-5 rounded-xl shadow"
          >
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div>
                <h2 className="font-semibold text-lg">
                  {alert.type}
                </h2>

                <p className="text-gray-600 mt-1">
                  {alert.message}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {alert.time}
                </p>
              </div>

              <div className="flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(
                    alert.severity
                  )}`}
                >
                  {alert.severity}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    alert.status === "Active"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {alert.status}
                </span>
              </div>
            </div>
          </div>
        ))}

        {filteredAlerts.length === 0 && (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            No alerts found.
          </div>
        )}
      </div>
    </div>
  );
}