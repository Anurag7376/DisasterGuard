import React from 'react';
import { format } from 'date-fns';
import { BadgeAlert as Alert, AlertTriangle, Siren as Fire, ScanLine as Hurricane, Heater as Water, Wind } from 'lucide-react';
import type { Alert as AlertType } from '../types';

const alertIcons = {
  earthquake: Alert,
  flood: Water,
  cyclone: Water,
  hurricane: Hurricane,
  wildfire: Fire,
  tornado: Wind,
};

const severityColors = {
  low: 'bg-yellow-100 text-yellow-800',
  medium: 'bg-orange-100 text-orange-800',
  high: 'bg-red-100 text-red-800',
  extreme: 'bg-red-200 text-red-900',
};

interface AlertCardProps {
  alert: AlertType;
}

export const AlertCard: React.FC<AlertCardProps> = ({ alert }) => {
  const IconComponent = alertIcons[alert.type];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <IconComponent className="w-6 h-6 mr-2" />
          <h3 className="text-xl font-semibold">{alert.title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${severityColors[alert.severity]}`}>
          {alert.severity.toUpperCase()}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{alert.description}</p>
      
      <div className="mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">📍 {alert.region}</span>
          <span>🕒 {format(alert.timestamp, 'PPp')}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="flex items-center text-lg font-medium mb-2">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Safety Instructions
        </h4>
        <ul className="list-disc list-inside space-y-2">
          {alert.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-700">{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};