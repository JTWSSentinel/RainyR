import React, { useEffect, useState } from "react";
import { CloudRain, Wind, Thermometer, Sun, Cloud } from "lucide-react";
export const WeatherCard = () => {
  const [currentRainfall, setCurrentRainfall] = useState(2.5);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        setCurrentRainfall(prev => {
          const change = (Math.random() - 0.5) * 0.5;
          return Math.max(0, prev + change);
        });
        setIsUpdating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const getWeatherIcon = () => {
    if (currentRainfall > 4) return <CloudRain className="text-blue-500 h-8 w-8" />;
    if (currentRainfall > 2) return <Cloud className="text-blue-400 h-8 w-8" />;
    return <Sun className="text-yellow-400 h-8 w-8" />;
  };
  return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-gray-200/50 hover:shadow-blue-50/50 transition-all duration-500 border border-gray-100 group hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Live Weather
          </h3>
          <p className="text-sm text-gray-500">Real-time conditions</p>
        </div>
        <div className="transition-transform duration-500 group-hover:scale-110">
          {getWeatherIcon()}
        </div>
      </div>
      <div className="space-y-6">
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Current Rainfall</span>
            <span className={`font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full transition-all duration-300 ${isUpdating ? "scale-110" : ""}`}>
              {currentRainfall.toFixed(1)}mm
            </span>
          </div>
          <div className="w-full bg-gradient-to-r from-gray-100 to-gray-50 rounded-full h-3">
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-500 ease-out relative group" style={{
            width: `${currentRainfall / 5 * 100}%`
          }}>
              <div className="absolute -right-1 -top-1 w-5 h-5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl transition-all duration-300 hover:shadow-md group">
            <div className="flex items-center gap-3">
              <Wind className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition-colors" />
              <div>
                <p className="text-xs text-gray-500">Wind Speed</p>
                <p className="font-medium text-gray-700">12 mph</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl transition-all duration-300 hover:shadow-md group">
            <div className="flex items-center gap-3">
              <Thermometer className="h-5 w-5 text-gray-500 group-hover:text-red-500 transition-colors" />
              <div>
                <p className="text-xs text-gray-500">Temperature</p>
                <p className="font-medium text-gray-700">18°C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Next update in</span>
            <span className="font-medium text-blue-600">
              {Math.floor(Math.random() * 60)} seconds
            </span>
          </div>
        </div>
      </div>
    </div>;
};
