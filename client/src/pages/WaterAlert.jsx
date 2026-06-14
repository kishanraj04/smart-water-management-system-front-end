import React from "react";

const alerts = [
  {
    id: 1,
    title: "Low Water Level",
    message: "Main Tank water level is below 20%",
    severity: "Warning",
    time: "10:30 AM",
  },
  {
    id: 2,
    title: "Tank Overflow",
    message: "Tank has reached 98% capacity",
    severity: "Critical",
    time: "11:15 AM",
  },
  {
    id: 3,
    title: "Water Leakage",
    message: "Possible leakage detected near Tank 2",
    severity: "Critical",
    time: "12:05 PM",
  },
  {
    id: 4,
    title: "High Water Consumption",
    message: "Today's usage exceeds normal average",
    severity: "Warning",
    time: "01:20 PM",
  },
];

export default function WaterAlert() {
  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-600 border-red-300";
      case "Warning":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      default:
        return "bg-blue-100 text-blue-600 border-blue-300";
    }
  };

  const criticalAlerts = alerts.filter(
    (a) => a.severity === "Critical"
  ).length;

  const warningAlerts = alerts.filter(
    (a) => a.severity === "Warning"
  ).length;

  return (
    <div className="p-6 min-h-screen">
      {/* Heading */}
     
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600 font-medium">
            Total Water Alerts
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {alerts.length}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600 font-medium">
            Critical Alerts
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {criticalAlerts}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600 font-medium">
            Warning Alerts
          </p>

          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {warningAlerts}
          </h2>
        </div>
      </div>

      {/* Alert Cards */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-gray-300 rounded-xl p-5 shadow-sm"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-semibold text-blue-600">
                  {alert.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {alert.message}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {alert.time}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full border text-sm font-medium ${getSeverityStyle(
                  alert.severity
                )}`}
              >
                {alert.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}