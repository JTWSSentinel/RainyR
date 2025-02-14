import React from "react";
import { Shield } from "lucide-react";
interface PolicyCardProps {
  festivalName: string;
  coverage: number;
}
export const PolicyCard = ({
  festivalName,
  coverage
}: PolicyCardProps) => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Your Rainy Refund</h3>
        <Shield className="text-green-500" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Festival</span>
          <span className="font-medium">{festivalName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Coverage</span>
          <span className="font-medium">£{coverage}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Status</span>
          <span className="text-green-500 font-medium">Active</span>
        </div>
      </div>
    </div>;
};
