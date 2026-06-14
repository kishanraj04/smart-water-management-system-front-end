import React from "react";

const sensorAlerts = [
  {
    id: 1,
    sensor: "Water Level Sensor",
    issue: "Sensor Offline",
    message: "No data received from Main Tank sensor.",
    severity: "Critical",
    time: "10:15 AM",
  },
  {
    id: 2,
    sensor: "Flow Sensor",
    issue: "Abnormal Reading",
    message: "Flow rate exceeds expected threshold.",
    severity: "Warning",
    time: "11:30 AM",
  },
  {
    id: 3,
    sensor: "Water Level Sensor",
    issue: "Calibration Required",
    message: "Sensor accuracy has dropped below acceptable range.",
    severity: "Warning",
    time: "12:20 PM",
  },
  {
    id: 4,
    sensor: "Pressure Sensor",
    issue: "Communication Failure",
    message: "Unable to communicate with sensor device.",
    severity: "Critical",
    time: "01:45 PM",
  },
];

export default function SensorAlert() {
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

  const criticalAlerts = sensorAlerts.filter(
    (a) => a.severity === "Critical"
  ).length;

  const warningAlerts = sensorAlerts.filter(
    (a) => a.severity === "Warning"
  ).length;

  return (
    <div className="p-6 min-h-screen">
      {/* Heading */}
     

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600 font-medium">
            Total Sensor Alerts
          </p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {sensorAlerts.length}
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
        {sensorAlerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-gray-300 rounded-xl p-5 shadow-sm"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-semibold text-blue-600">
                  {alert.issue}
                </h2>

                <p className="text-gray-700 mt-1">
                  <span className="font-medium">Sensor:</span>{" "}
                  {alert.sensor}
                </p>

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