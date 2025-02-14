import React from "react";
import { BadgeCheck, AlertTriangle, ArrowRight, Users, AlertCircle } from "lucide-react";
interface PayoutStatusProps {
  isVendor?: boolean;
  monitoringActive: boolean;
  festivalStartDate: Date;
}
export const PayoutStatus = ({
  isVendor,
  monitoringActive,
  festivalStartDate
}: PayoutStatusProps) => {
  if (!monitoringActive) {
    return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-gray-200/50 transition-shadow border border-gray-100 h-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Payout Information
            </h3>
          </div>
          <AlertTriangle className="text-yellow-500" />
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm text-yellow-800 font-medium">
                Payout monitoring begins at 8am on festival start date
              </p>
              <p className="text-sm text-yellow-700">
                Your policy is active and we'll begin assessing potential
                payouts from{" "}
                {festivalStartDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long"
              })}{" "}
                at 8am.
              </p>
            </div>
          </div>
          <div className="bg-white/50 p-4 rounded-lg space-y-3">
            {isVendor ? <>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Policies Ready</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Coverage</span>
                  <span className="font-medium">£2,400</span>
                </div>
              </> : <>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Policy Status</span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Coverage Amount</span>
                  <span className="font-medium">£200</span>
                </div>
              </>}
          </div>
        </div>
      </div>;
  }
  const forecastAmount = 4.2;
  const threshold = 5.0;
  const likelihood = forecastAmount / threshold * 100;
  return <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Payout Status</h3>
          <p className="text-sm text-gray-500">Based on 8am forecast</p>
        </div>
        <AlertTriangle className="text-yellow-500" />
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Forecast</div>
            <div className="text-xl font-semibold">{forecastAmount}mm</div>
          </div>
          <div className="p-4 flex items-center justify-center">
            <ArrowRight className="text-gray-400 h-6 w-6" />
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Threshold</div>
            <div className="text-xl font-semibold">{threshold}mm</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Payout Likelihood</span>
            <span>{Math.round(likelihood)}%</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500" style={{
            width: `${likelihood}%`
          }}></div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          {isVendor ? <>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Users className="h-4 w-4" />
                <span>Potential payouts across all policies</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Active Policies</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Coverage</span>
                <span className="font-medium">£2,400</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">At-risk Policies</span>
                <span className="font-medium text-yellow-600">8</span>
              </div>
            </> : <>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Policy Coverage</span>
                <span className="font-medium">£200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Potential Payout</span>
                <span className="font-medium">£200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Next Update</span>
                <span className="font-medium">15:00</span>
              </div>
            </>}
        </div>
      </div>
    </div>;
};
