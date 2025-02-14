import React from "react";
import { Calendar, AlertCircle } from "lucide-react";
interface ForecastComparisonProps {
  festivalStartDate: Date;
}
export const ForecastComparison = ({
  festivalStartDate
}: ForecastComparisonProps) => {
  const today = new Date();
  const startDate8AM = new Date(festivalStartDate);
  startDate8AM.setHours(8, 0, 0, 0);
  const isMonitoringActive = today >= startDate8AM;
  if (!isMonitoringActive) {
    return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-gray-200/50 transition-shadow border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Forecast Monitoring
            </h3>
          </div>
          <Calendar className="text-blue-500" />
        </div>
        <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm text-blue-700 font-medium">
              Forecast monitoring begins at 8am on{" "}
              {festivalStartDate.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
            </p>
            <p className="text-sm text-blue-600">
              We'll start monitoring Met Office forecasts from the morning of
              the festival and keep you updated throughout the event.
            </p>
          </div>
        </div>
      </div>;
  }
  return null;
};
