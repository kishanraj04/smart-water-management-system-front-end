import React from "react";

const reports = [
  {
    id: 1,
    reportName: "Sensor Health Report",
    generatedOn: "14 Jun 2026",
    format: "PDF",
    file: "/reports/sensor-health-report.pdf",
  },
  {
    id: 2,
    reportName: "Sensor Failure Report",
    generatedOn: "14 Jun 2026",
    format: "Excel",
    file: "/reports/sensor-failure-report.xlsx",
  },
  {
    id: 3,
    reportName: "Water Level Sensor Report",
    generatedOn: "10 Jun 2026",
    format: "PDF",
    file: "/reports/water-level-sensor-report.pdf",
  },
  {
    id: 4,
    reportName: "Flow Sensor Activity Report",
    generatedOn: "01 Jun 2026",
    format: "Excel",
    file: "/reports/flow-sensor-activity-report.xlsx",
  },
  {
    id: 5,
    reportName: "Sensor Uptime Report",
    generatedOn: "01 Jun 2026",
    format: "PDF",
    file: "/reports/sensor-uptime-report.pdf",
  },
];

export default function SensorReports() {
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pdfReports = reports.filter(
    (report) => report.format === "PDF"
  ).length;

  const excelReports = reports.filter(
    (report) => report.format === "Excel"
  ).length;

  return (
    <div className="p-6 min-h-screen">
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-300 rounded-xl p-5">
          <p className="text-blue-600">Total Reports</p>
          <h2 className="text-3xl font-bold text-white-600 mt-2">
            {reports.length}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5">
          <p className="text-blue-600">PDF Reports</p>
          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {pdfReports}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5">
          <p className="text-blue-600">Excel Reports</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {excelReports}
          </h2>
        </div>
      </div>

      {/* Reports */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="border border-gray-300 rounded-xl p-5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Left */}
              <div>
                <h2 className="text-lg font-semibold text-blue-600">
                  {report.reportName}
                </h2>

                <p className="text-gray-600 mt-2">
                  Generated On: {report.generatedOn}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Format: {report.format}
                </p>
              </div>

              {/* Right */}
              <div>
                <button
                  onClick={() => handleDownload(report.file)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-200"
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}