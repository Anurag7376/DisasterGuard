import { Alert } from '../types';

export const indianStates = [
  'Maharashtra',
  'Kerala',
  'Gujarat',
  'Tamil Nadu',
  'Karnataka',
  'Odisha',
  'West Bengal',
  'Assam',
  'Bihar',
  'Uttar Pradesh'
];

export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'flood',
    severity: 'high',
    region: 'Kerala',
    title: 'Heavy Rainfall Alert',
    description: 'Severe flooding expected in coastal regions of Kerala',
    timestamp: new Date(),
    instructions: [
      'Move to higher ground immediately',
      'Avoid crossing flooded areas',
      'Keep emergency supplies ready',
      'Follow local authority instructions'
    ]
  },
  {
    id: '2',
    type: 'cyclone',
    severity: 'extreme',
    region: 'Odisha',
    title: 'Cyclone Warning',
    description: 'Cyclonic storm approaching the coast of Odisha',
    timestamp: new Date(),
    instructions: [
      'Stay indoors and away from windows',
      'Keep emergency kit ready',
      'Follow evacuation orders if given',
      'Keep mobile phones charged'
    ]
  },
  {
    id: '3',
    type: 'earthquake',
    severity: 'medium',
    region: 'Gujarat',
    title: 'Seismic Activity Alert',
    description: 'Moderate seismic activity detected in Kutch region',
    timestamp: new Date(),
    instructions: [
      'Stay away from buildings',
      'Move to open areas',
      'Be prepared for aftershocks',
      'Help others if safe to do so'
    ]
  }
];

export const mockNews = [
  {
    id: '1',
    title: 'IMD Launches Advanced Weather Monitoring System',
    summary: 'Indian Meteorological Department implements new AI-powered weather prediction system',
    source: 'Weather Watch India',
    date: new Date('2024-02-15'),
    imageUrl: 'https://images.unsplash.com/photo-1590055531615-6d51bd4ac208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  },
  {
    id: '2',
    title: 'Cyclone Preparedness in Coastal Regions',
    summary: 'Coastal states implement new disaster management protocols for upcoming monsoon season',
    source: 'Disaster Management Today',
    date: new Date('2024-02-10'),
    imageUrl: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

export const mockPreventiveMeasures = [
  {
    id: '1',
    title: 'Monsoon Safety Guide',
    description: 'Essential preparations for the Indian monsoon season',
    disasterType: 'flood',
    icon: '🌧️',
    steps: [
      'Clear drainage systems around your home',
      'Keep important documents in waterproof containers',
      'Stock up on essential medicines and supplies',
      'Know your local emergency contacts'
    ]
  },
  {
    id: '2',
    title: 'Cyclone Preparedness',
    description: 'Protect your family during cyclone season',
    disasterType: 'cyclone',
    icon: '🌪️',
    steps: [
      'Secure loose items in your compound',
      'Keep emergency lights and batteries ready',
      'Store drinking water and non-perishable food',
      'Know your nearest cyclone shelter'
    ]
  }
];