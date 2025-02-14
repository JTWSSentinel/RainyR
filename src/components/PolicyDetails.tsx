import React, { useState } from "react";
import { Umbrella, AlertCircle, Calendar, Ticket, ArrowRight, CheckCircle, Store, Users, CloudRain } from "lucide-react";
interface PolicyDetailsProps {
  festivalName: string;
  startDate: Date;
  coverage: number;
  rainThreshold: number;
  ticketPrice: number;
  premium: number;
}
export const PolicyDetails = ({
  festivalName,
  startDate,
  coverage,
  rainThreshold,
  ticketPrice,
  premium
}: PolicyDetailsProps) => {
  const [isVendor, setIsVendor] = useState(false);
  const [pitchFee, setPitchFee] = useState(""); // Changed from 1000 to empty string
  const pitchFeeNumber = parseInt(pitchFee) || 0;
  const perDayRefund = isVendor ? pitchFeeNumber / 3 : coverage / 3;
  const daysNeeded = 3;
  const maxRefund = isVendor ? pitchFeeNumber : coverage;
  const refundScenarios = [{
    days: 1,
    amount: perDayRefund,
    percentageOfFee: isVendor ? 33 : undefined
  }, {
    days: 2,
    amount: perDayRefund * 2,
    percentageOfFee: isVendor ? 66 : undefined
  }, {
    days: 3,
    amount: maxRefund,
    percentageOfFee: isVendor ? 100 : undefined
  }];
  return <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-purple-100/50 transition-all border border-purple-100/50 hover:shadow-purple-200/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {isVendor ? "Vendor Protection" : "Rainy Refund Details"}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            {isVendor ? "Protect your pitch fee against rainfall" : "Review policy details before purchase"}
          </p>
        </div>
        <Umbrella className="h-8 w-8 text-purple-500" />
      </div>
      <div className="space-y-8">
        <div className="bg-gray-100 p-1 rounded-lg flex gap-1">
          <button onClick={() => setIsVendor(false)} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex-1 ${!isVendor ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}>
            <Users className="h-4 w-4" />
            Festival Goer
          </button>
          <button onClick={() => setIsVendor(true)} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex-1 ${isVendor ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}>
            <Store className="h-4 w-4" />
            Vendor
          </button>
        </div>
        {isVendor && <div className="bg-purple-50 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Pitch Fee
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                £
              </span>
              <input type="number" value={pitchFee} onChange={e => setPitchFee(e.target.value)} className="w-full pl-8 pr-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter your pitch fee" />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Enter the total amount you paid for your festival pitch
            </p>
          </div>}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Daily Threshold</div>
            <div className="text-xl font-semibold text-purple-700">
              {rainThreshold}mm
            </div>
            <div className="mt-3 p-3 bg-white/80 rounded-lg border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <CloudRain className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-700">
                  What is {rainThreshold}mm of rain?
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <div className="flex-1 text-center p-2 bg-purple-50 rounded-md">
                  <span className="block font-medium text-purple-700 mb-1">
                    Light Rain
                  </span>
                  <span className="block">1mm</span>
                  <span className="block text-[10px]">Damp Ground</span>
                </div>
                <ArrowRight className="h-3 w-3 text-gray-400" />
                <div className="flex-1 text-center p-2 bg-purple-100 rounded-md">
                  <span className="block font-medium text-purple-700 mb-1">
                    {rainThreshold}mm
                  </span>
                  <span className="block">Heavy Rain</span>
                  <span className="block text-[10px]">Puddles Forming</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">
              {isVendor ? "Daily Compensation" : "Per Day Refund"}
            </div>
            <div className="text-xl font-semibold text-green-700">
              £{Math.round(perDayRefund)}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              When threshold is exceeded
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
          <h4 className="text-sm font-medium text-gray-900 mb-4">
            {isVendor ? "Potential Compensation Scenarios" : "Potential Refund Scenarios"}
          </h4>
          <div className="space-y-3">
            {refundScenarios.map((scenario, index) => <div key={index} className="bg-white/80 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    {scenario.days} {scenario.days === 1 ? "day" : "days"} over{" "}
                    {rainThreshold}mm
                  </span>
                  <div className="text-right">
                    <span className="font-medium text-purple-600">
                      £{Math.round(scenario.amount)}
                    </span>
                    {isVendor && <span className="text-xs text-gray-500 block">
                        {scenario.percentageOfFee}% of pitch fee
                      </span>}
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{
                width: `${scenario.days / daysNeeded * 100}%`
              }} />
                </div>
              </div>)}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            {isVendor ? `Maximum compensation of £${Math.round(maxRefund)} (100% of pitch fee) is available if rainfall exceeds ${rainThreshold}mm on all three festival days` : `Maximum refund of £${maxRefund} is available if rainfall exceeds ${rainThreshold}mm on all three festival days`}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Festival</span>
            <span className="font-medium">{festivalName}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Event Duration</span>
            <span className="font-medium">3 Days</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Start Date</span>
            <span className="font-medium">
              {startDate.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
            </span>
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center gap-2">
                <Ticket className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">
                  {isVendor ? "Pitch Fee" : "Ticket Value"}
                </span>
              </div>
              <span className="font-medium">
                £{isVendor ? pitchFee : ticketPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <p className="text-base font-medium text-gray-900">
                {isVendor ? "Ready to protect your pitch investment?" : "Ready to protect your festival ticket?"}
              </p>
              <p className="text-sm text-gray-600">
                One-time premium payment • No additional fees
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Premium</p>
              <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                £{isVendor ? Math.round(pitchFee * 0.1) : premium}
              </p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-100/50 flex items-center justify-center gap-2 group" onClick={() => {
          alert("Purchase flow will be implemented here");
        }}>
            Purchase Rainy Refund
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-purple-500" />
              Met Office data
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-purple-500" />
              Secure payment
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-purple-500" />
              Instant payout
            </span>
          </div>
        </div>
      </div>
    </div>;
};
