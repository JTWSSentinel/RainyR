import React from "react";
import { MapPin, Navigation } from "lucide-react";
export const LocationMap = () => {
  return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-gray-200/50 hover:shadow-red-50/50 transition-shadow border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          Festival Location
        </h3>
        <MapPin className="text-red-500" />
      </div>
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg h-48 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
          <div className="text-center relative">
            <p className="font-medium text-gray-900">Worthy Farm</p>
            <p className="text-sm text-gray-600">Pilton, Somerset</p>
          </div>
          <Navigation className="absolute bottom-2 right-2 h-4 w-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center justify-between text-sm bg-red-50 p-2 rounded-lg">
          <span className="text-gray-600">Weather Station</span>
          <span className="font-medium text-red-600">0.5 miles away</span>
        </div>
      </div>
    </div>;
};
