import React from "react";
import { CheckCircle, Calendar, Shield, ArrowRight } from "lucide-react";
interface PolicyConfirmationProps {
  festivalName: string;
  startDate: Date;
  coverage: number;
  premium: number;
  onViewDashboard: () => void;
}
export const PolicyConfirmation = ({
  festivalName,
  startDate,
  coverage,
  premium,
  onViewDashboard
}: PolicyConfirmationProps) => {
  return <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-green-100/50 transition-all border border-green-100/50">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="bg-green-100 p-3 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Purchase Confirmed!
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Your rainy refund policy is now active
        </p>
      </div>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Festival</span>
              <span className="font-medium">{festivalName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Start Date</span>
              <span className="font-medium">
                {startDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Coverage</span>
              <span className="font-medium">£{coverage}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Premium Paid</span>
              <span className="font-medium">£{premium}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
          <Calendar className="h-5 w-5 text-green-600" />
          <p className="text-sm text-green-800">
            We'll start monitoring weather data from 8am on the first day
          </p>
        </div>
        <button onClick={onViewDashboard} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-100/50 flex items-center justify-center gap-2 group">
          View Your Dashboard
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Shield className="h-3 w-3 text-green-500" />
            Policy Active
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-green-500" />
            Email Confirmation Sent
          </span>
        </div>
      </div>
    </div>;
};
