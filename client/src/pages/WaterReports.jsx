import React from "react";

const reports = [
  {
    id: 1,
    reportName: "Daily Water Consumption Report",
    generatedOn: "14 Jun 2026",
    format: "PDF",
  },
  {
    id: 2,
    reportName: "Weekly Water Usage Report",
    generatedOn: "14 Jun 2026",
    format: "Excel",
  },
  {
    id: 3,
    reportName: "Monthly Water Consumption Report",
    generatedOn: "01 Jun 2026",
    format: "PDF",
  },
  {
    id: 4,
    reportName: "Yearly Water Analytics Report",
    generatedOn: "01 Jan 2026",
    format: "Excel",
  },
];

export default function WaterReports() {
  return (
    <div className="p-6 min-h-screen">
     
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600">Total Reports</p>
          <h2 className="text-3xl font-bold text-white-600 mt-2">
            {reports.length}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600">PDF Reports</p>
          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {reports.filter((r) => r.format === "PDF").length}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600">Excel Reports</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {reports.filter((r) => r.format === "Excel").length}
          </h2>
        </div>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="border border-gray-300 rounded-xl p-5 shadow-sm"
          >
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-semibold text-blue-600">
                  {report.reportName}
                </h2>

                <p className="text-gray-600 mt-2">
                  Generated On: {report.generatedOn}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Format: {report.format}
                </p>
              </div>

              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white
                           hover:bg-blue-700 transition"
              >
                Download Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}