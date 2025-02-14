import React from "react";
import { PolicyCard } from "./PolicyCard";
import { PayoutStatus } from "./PayoutStatus";
import { WeatherCard } from "./WeatherCard";
import { AlertsTimeline } from "./AlertsTimeline";
import { RainfallChart } from "./RainfallChart";
import { LocationMap } from "./LocationMap";
import { ForecastComparison } from "./ForecastComparison";
interface PolicyDashboardProps {
  festivalName: string;
  startDate: Date;
  coverage: number;
}
export const PolicyDashboard = ({
  festivalName,
  startDate,
  coverage
}: PolicyDashboardProps) => {
  return <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PolicyCard festivalName={festivalName} coverage={coverage} />
        <PayoutStatus monitoringActive={false} festivalStartDate={startDate} />
        <WeatherCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <RainfallChart />
        </div>
        <LocationMap />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ForecastComparison festivalStartDate={startDate} />
        <AlertsTimeline />
      </div>
    </div>;
};
