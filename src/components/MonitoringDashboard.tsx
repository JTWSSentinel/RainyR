import React from "react";
import { PolicyCard } from "./PolicyCard";
import { PayoutStatus } from "./PayoutStatus";
import { WeatherCard } from "./WeatherCard";
import { AlertsTimeline } from "./AlertsTimeline";
import { RainfallChart } from "./RainfallChart";
import { LocationMap } from "./LocationMap";
interface MonitoringDashboardProps {
  festivalName: string;
  startDate: Date;
  coverage: number;
  isVendor?: boolean;
}
export const MonitoringDashboard = ({
  festivalName,
  startDate,
  coverage,
  isVendor = false
}: MonitoringDashboardProps) => {
  return <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PolicyCard festivalName={festivalName} coverage={coverage} />
        <PayoutStatus monitoringActive={true} festivalStartDate={startDate} isVendor={isVendor} />
        <WeatherCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <RainfallChart />
        </div>
        <LocationMap />
      </div>
      <div className="md:col-span-2">
        <AlertsTimeline />
      </div>
    </div>;
};
