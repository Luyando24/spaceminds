import React from 'react';

export default function Marquee() {
  const clients = [
    "Ministry of Health",
    "UNESCO",
    "World Bank",
    "TechNova Solutions",
    "Department of Energy",
    "City Transport Authority",
    "Alpha Retail Group",
    "Global Education Initiative",
    "National Digital Service",
    "Civic Tech Alliance",
    "Nexus Logistics",
    "GreenLeaf Energy"
  ];

  return (
    <div className="w-full bg-white border-y border-gray-100 py-10 overflow-hidden relative">
      <div className="absolute inset-0 z-10 marquee-mask pointer-events-none"></div>
      <div className="flex w-max animate-scroll">
        {[...clients, ...clients, ...clients].map((client, i) => (
          <div key={i} className="mx-8 md:mx-16 flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-gray-300 uppercase tracking-tight whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
