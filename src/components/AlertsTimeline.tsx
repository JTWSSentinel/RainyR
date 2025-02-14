import React from "react";
import { Bell, CheckCircle, Clock } from "lucide-react";
export const AlertsTimeline = () => {
  return <div className="bg-white p-6 rounded-lg shadow-sm col-span-full md:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Forecast Timeline</h3>
          <p className="text-sm text-gray-500">Today's monitoring updates</p>
        </div>
        <Bell className="text-gray-500" />
      </div>
      <div className="space-y-4">
        {[{
        time: "08:00",
        event: "Met Office Forecast Received",
        detail: "4.2mm rainfall predicted",
        status: "success"
      }, {
        time: "09:15",
        event: "Payout Likelihood Calculated",
        detail: "84% of threshold reached",
        status: "success"
      }, {
        time: "15:00",
        event: "Next Forecast Update",
        detail: "Afternoon assessment scheduled",
        status: "pending"
      }].map((item, index) => <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {item.status === "success" ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Clock className="h-5 w-5 text-blue-500" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <p className="text-sm font-medium">{item.event}</p>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
            </div>
          </div>)}
      </div>
    </div>;
};
