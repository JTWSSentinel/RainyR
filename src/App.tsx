import React, { useState } from "react";
import { PolicySelector } from "./components/PolicySelector";
import { PolicyDetails } from "./components/PolicyDetails";
export function App() {
  const [selectedFestivalId, setSelectedFestivalId] = useState("demo-festival");
  const festivals = [{
    id: "demo-festival",
    name: "Demo Festival 2025",
    startDate: new Date("2025-08-15"),
    coverage: 200,
    ticketPrice: 300,
    premium: 25,
    rainThreshold: 5.0
  }, {
    id: "reading",
    name: "Reading Festival",
    startDate: new Date("2025-08-22"),
    coverage: 200,
    ticketPrice: 300,
    premium: 22,
    rainThreshold: 5.0
  }, {
    id: "isle-of-wight",
    name: "Isle of Wight Festival",
    startDate: new Date("2025-06-19"),
    coverage: 200,
    ticketPrice: 300,
    premium: 19,
    rainThreshold: 5.0
  }];
  const selectedFestival = festivals.find(f => f.id === selectedFestivalId);
  return <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTSAwIDAgTCAyMCAyMCBNIC0yIDIwIEwgMjIgLTIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20" />
      <header className="relative bg-white/60 backdrop-blur-md border-b border-purple-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Rainy Refunds
            </h1>
          </div>
        </div>
      </header>
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <PolicySelector selectedFestivalId={selectedFestivalId} onFestivalSelect={setSelectedFestivalId} />
          {selectedFestival && <PolicyDetails festivalName={selectedFestival.name} startDate={selectedFestival.startDate} coverage={selectedFestival.coverage} rainThreshold={selectedFestival.rainThreshold} ticketPrice={selectedFestival.ticketPrice} premium={selectedFestival.premium} />}
        </div>
      </main>
    </div>;
}
