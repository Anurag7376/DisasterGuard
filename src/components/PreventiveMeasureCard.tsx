import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface PreventiveMeasure {
  id: string;
  title: string;
  description: string;
  steps: string[];
  disasterType: string;
  icon: string;
}

export const PreventiveMeasureCard: React.FC<{ measure: PreventiveMeasure }> = ({ measure }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <ShieldCheck className="w-6 h-6 text-green-600 mr-2" />
        <h3 className="text-xl font-semibold">{measure.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{measure.description}</p>
      <div className="space-y-3">
        {measure.steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm mr-3">
              {index + 1}
            </span>
            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};