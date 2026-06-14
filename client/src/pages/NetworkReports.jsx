import React from "react";

const reports = [
  {
    id: 1,
    reportName: "Network Health Report",
    generatedOn: "14 Jun 2026",
    format: "PDF",
    file: "/reports/network-health-report.pdf",
  },
  {
    id: 2,
    reportName: "Network Downtime Report",
    generatedOn: "14 Jun 2026",
    format: "Excel",
    file: "/reports/network-downtime-report.xlsx",
  },
  {
    id: 3,
    reportName: "Device Connectivity Report",
    generatedOn: "10 Jun 2026",
    format: "PDF",
    file: "/reports/device-connectivity-report.pdf",
  },
  {
    id: 4,
    reportName: "Network Latency Report",
    generatedOn: "05 Jun 2026",
    format: "Excel",
    file: "/reports/network-latency-report.xlsx",
  },
  {
    id: 5,
    reportName: "Communication Failure Report",
    generatedOn: "01 Jun 2026",
    format: "PDF",
    file: "/reports/communication-failure-report.pdf",
  },
];

export default function NetworkReports() {
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
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Network Reports
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600 font-medium">
            Total Reports
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {reports.length}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600 font-medium">
            PDF Reports
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {pdfReports}
          </h2>
        </div>

        <div className="border border-gray-300 rounded-xl p-5 shadow-sm">
          <p className="text-blue-600 font-medium">
            Excel Reports
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {excelReports}
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Report Info */}
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

              {/* Download Button */}
              <button
                onClick={() => handleDownload(report.file)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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