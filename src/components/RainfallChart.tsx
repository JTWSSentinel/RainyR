import React, { useEffect, useState } from "react";
import { CloudDrizzle, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
export const RainfallChart = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const days = [{
    date: "Day 1",
    rainfall: [20, 35, 45, 30],
    temperature: [16, 18, 20, 19],
    forecast: "Heavy Rain"
  }, {
    date: "Day 2",
    rainfall: [15, 25, 20, 10],
    temperature: [17, 19, 21, 18],
    forecast: "Light Rain"
  }, {
    date: "Day 3",
    rainfall: [5, 10, 15, 20],
    temperature: [18, 20, 22, 19],
    forecast: "Scattered Showers"
  }];
  const handleDayChange = (direction: "prev" | "next") => {
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === "prev" && selectedDay > 0) {
        setSelectedDay(prev => prev - 1);
      } else if (direction === "next" && selectedDay < days.length - 1) {
        setSelectedDay(prev => prev + 1);
      }
      setIsAnimating(false);
    }, 200);
  };
  return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-gray-200/50 hover:shadow-blue-50/50 transition-all duration-500 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Festival Rainfall Tracking
          </h3>
          <p className="text-sm text-gray-500">
            Detailed measurements and forecasts
          </p>
        </div>
        <CloudDrizzle className="text-blue-500 h-7 w-7" />
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => handleDayChange("prev")} disabled={selectedDay === 0} className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${selectedDay === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </button>
          <div className="text-center">
            <h4 className="font-medium text-gray-900">
              {days[selectedDay].date}
            </h4>
            <p className="text-sm text-gray-500">
              {days[selectedDay].forecast}
            </p>
          </div>
          <button onClick={() => handleDayChange("next")} disabled={selectedDay === days.length - 1} className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${selectedDay === days.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
            <ArrowRight className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className={`transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          <div className="flex items-end justify-between h-48 gap-2 relative bg-gradient-to-b from-gray-50 to-white rounded-lg p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent rounded-lg" />
            {days[selectedDay].rainfall.map((height, index) => <div key={index} className="flex-1 flex flex-col items-center gap-2 relative">
                <div className="absolute top-0 w-full text-center">
                  <span className="text-xs font-medium text-gray-500">
                    {days[selectedDay].temperature[index]}°C
                  </span>
                </div>
                <div className="w-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 relative group cursor-pointer" style={{
              height: `${height}%`,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {(height / 10).toFixed(1)}mm
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {`${(index + 2) * 4}:00`}
                </span>
              </div>)}
          </div>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-400" />
            <span>Rainfall Intensity</span>
          </div>
          <span className="font-medium text-blue-600">
            Average:{" "}
            {(days[selectedDay].rainfall.reduce((a, b) => a + b, 0) / 40).toFixed(1)}
            mm/h
          </span>
        </div>
      </div>
    </div>;
};
