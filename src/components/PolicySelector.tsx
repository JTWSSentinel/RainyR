import React from "react";
import { Calendar, MapPin, Umbrella, ChevronRight, Lock, CheckCircle, AlertCircle, CloudRain, AlertTriangle } from "lucide-react";
interface Festival {
  id: string;
  name: string;
  date: string;
  startDate: Date;
  coverage: number;
  ticketPrice: number;
  premium: number;
  imageUrl: string;
}
const festivals: Festival[] = [{
  id: "test-festival",
  name: "Demo Festival 2025",
  date: "15-17 August 2025",
  startDate: new Date("2025-08-15"),
  coverage: 200,
  ticketPrice: 300,
  premium: 25,
  imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}];
interface PolicySelectorProps {
  selectedFestivalId: string;
  onFestivalSelect: (festivalId: string) => void;
}
const isPurchaseAvailable = (startDate: Date): boolean => {
  const today = new Date();
  const purchaseDeadline = new Date(startDate);
  purchaseDeadline.setDate(startDate.getDate() - 21);
  return today <= purchaseDeadline;
};
const getPurchaseDeadline = (startDate: Date): string => {
  const deadline = new Date(startDate);
  deadline.setDate(startDate.getDate() - 21);
  return deadline.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};
export const PolicySelector = ({
  selectedFestivalId,
  onFestivalSelect
}: PolicySelectorProps) => {
  return <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-purple-100/50 transition-all border border-purple-100/50 hover:shadow-purple-200/50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Rainy Refund Demo
            </h3>
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              Proof of Concept
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Experience how our festival rain insurance would work with this
            interactive demo
          </p>
        </div>
        <Umbrella className="h-8 w-8 text-purple-500" />
      </div>
      <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-2">
          <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            This is a demonstration version. The actual service will launch with
            real festival coverage in 2025.
          </p>
        </div>
      </div>
      <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">How It Works</h4>
        <div className="grid gap-4">
          {[{
          icon: <Calendar className="h-5 w-5 text-purple-500" />,
          title: "Choose Your Festival",
          description: "Select the festival you're attending (demo version shows one example)"
        }, {
          icon: <CloudRain className="h-5 w-5 text-purple-500" />,
          title: "We Monitor the Rain",
          description: "Using Met Office data, we track rainfall during the festival"
        }, {
          icon: <CheckCircle className="h-5 w-5 text-purple-500" />,
          title: "Automatic Refunds",
          description: "Get compensated if rainfall exceeds the threshold"
        }].map((item, index) => <div key={index} className="flex items-start gap-3 bg-white/80 p-4 rounded-lg">
              {item.icon}
              <div>
                <h5 className="font-medium text-gray-900">{item.title}</h5>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>)}
        </div>
      </div>
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          Why Choose Rainy Refunds?
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {[{
          title: "Instant Payouts",
          description: "No claims process needed"
        }, {
          title: "Transparent Terms",
          description: "Clear rainfall thresholds"
        }, {
          title: "Met Office Data",
          description: "Official rainfall measurements"
        }, {
          title: "Simple Pricing",
          description: "Around 10% of your ticket price"
        }].map((benefit, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-1">
                {benefit.title}
              </h5>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
        <div className="mt-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-purple-700">Example:</span> For
              a £300 festival ticket, you'd pay roughly £25-£30 for rain
              protection
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {festivals.map(festival => <div key={festival.id} className="relative overflow-hidden rounded-xl border border-purple-100 bg-white/80">
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {festival.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {festival.date}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">Sample Premium</span>
                  <span className="block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100 mt-1">
                    £{festival.premium}
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3 mt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Sample Coverage</span>
                  <span className="font-medium text-purple-700">
                    £{festival.coverage}
                  </span>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-6 bg-yellow-50 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-sm text-yellow-800 font-medium">
              Demo Limitations
            </p>
            <ul className="text-sm text-yellow-700 list-disc pl-4 space-y-1">
              <li>Sample data is used for demonstration</li>
              <li>Weather measurements are simulated</li>
              <li>No actual transactions are processed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
};
