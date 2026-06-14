import React from "react";

const networkAlerts = [
  {
    id: 1,
    title: "Network Disconnected",
    message: "Main controller lost internet connection.",
    severity: "Critical",
    time: "09:15 AM",
  },
  {
    id: 2,
    title: "Gateway Offline",
    message: "IoT Gateway is not responding.",
    severity: "Critical",
    time: "10:05 AM",
  },
  {
    id: 3,
    title: "High Network Latency",
    message: "Response time exceeded 500ms.",
    severity: "Warning",
    time: "11:20 AM",
  },
  {
    id: 4,
    title: "MQTT Connection Failed",
    message: "Unable to connect to MQTT broker.",
    severity: "Critical",
    time: "12:40 PM",
  },
  {
    id: 5,
    title: "Device Reconnected",
    message: "Sensor network connection restored.",
    severity: "Info",
    time: "01:10 PM",
  },
];

export default function NetworkAlert() {
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

  const criticalAlerts = networkAlerts.filter(
    (a) => a.severity === "Critical"
  ).length;

  const warningAlerts = networkAlerts.filter(
    (a) => a.severity === "Warning"
  ).length;

  const infoAlerts = networkAlerts.filter(
    (a) => a.severity === "Info"
  ).length;

  return (
    <div className="p-6 min-h-screen">
      

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600">Total Alerts</p>
          <h2 className="text-3xl font-bold text-black-600 mt-2">
            {networkAlerts.length}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600">Critical</p>
          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {criticalAlerts}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600">Warning</p>
          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {warningAlerts}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600">Info</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {infoAlerts}
          </h2>
        </div>
      </div>

      {/* Alert Cards */}
      <div className="space-y-4">
        {networkAlerts.map((alert) => (
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