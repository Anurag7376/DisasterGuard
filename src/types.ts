export interface Alert {
  id: string;
  type: 'earthquake' | 'flood' | 'hurricane' | 'wildfire' | 'tornado' | 'cyclone';
  severity: 'low' | 'medium' | 'high' | 'extreme';
  region: string;
  title: string;
  description: string;
  timestamp: Date;
  instructions: string[];
}

export interface Region {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}