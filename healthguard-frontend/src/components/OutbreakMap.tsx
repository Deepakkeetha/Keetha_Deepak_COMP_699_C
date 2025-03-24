/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for outbreak locations
const outbreakIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Outbreak types and data
const outbreakTypes = [
  { id: 'covid19', name: 'COVID-19' },
  { id: 'influenza', name: 'Influenza' },
  { id: 'dengue', name: 'Dengue Fever' },
  { id: 'measles', name: 'Measles' }
];

const outbreakLocations = {
  covid19: [
    { id: 1, position: [40.7128, -74.0060], name: 'New York City', cases: 150, risk: 'High' },
    { id: 2, position: [34.0522, -118.2437], name: 'Los Angeles', cases: 89, risk: 'Medium' },
    { id: 3, position: [41.8781, -87.6298], name: 'Chicago', cases: 67, risk: 'Medium' },
    { id: 4, position: [29.7604, -95.3698], name: 'Houston', cases: 45, risk: 'Low' }
  ],
  influenza: [
    { id: 1, position: [47.6062, -122.3321], name: 'Seattle', cases: 98, risk: 'High' },
    { id: 2, position: [39.9526, -75.1652], name: 'Philadelphia', cases: 76, risk: 'Medium' },
    { id: 3, position: [42.3601, -71.0589], name: 'Boston', cases: 54, risk: 'Medium' },
    { id: 4, position: [39.7392, -104.9903], name: 'Denver', cases: 32, risk: 'Low' }
  ],
  dengue: [
    { id: 1, position: [25.7617, -80.1918], name: 'Miami', cases: 45, risk: 'High' },
    { id: 2, position: [29.9511, -90.0715], name: 'New Orleans', cases: 34, risk: 'Medium' },
    { id: 3, position: [27.9506, -82.4572], name: 'Tampa', cases: 28, risk: 'Medium' },
    { id: 4, position: [21.3069, -157.8583], name: 'Honolulu', cases: 15, risk: 'Low' }
  ],
  measles: [
    { id: 1, position: [37.7749, -122.4194], name: 'San Francisco', cases: 23, risk: 'High' },
    { id: 2, position: [44.9778, -93.2650], name: 'Minneapolis', cases: 18, risk: 'Medium' },
    { id: 3, position: [33.7490, -84.3880], name: 'Atlanta', cases: 15, risk: 'Medium' },
    { id: 4, position: [32.7157, -117.1611], name: 'San Diego', cases: 8, risk: 'Low' }
  ]
};

const OutbreakMap = () => {
  const [selectedOutbreak, setSelectedOutbreak] = useState(outbreakTypes[0].id);
  const currentLocations = outbreakLocations[selectedOutbreak];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        {/* Outbreak Selection */}
        <div className="mb-6">
          <label htmlFor="outbreak-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select Outbreak Type
          </label>
          <select
            id="outbreak-select"
            value={selectedOutbreak}
            onChange={(e) => setSelectedOutbreak(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {outbreakTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-3 mb-6">
          <MapPin className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">Outbreak Map</h2>
        </div>

        {/* Map Container */}
        <div className="h-[600px] rounded-lg overflow-hidden mb-6">
          <MapContainer
            center={[39.8283, -98.5795]}
            zoom={4}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {currentLocations.map((location:any) => (
              <Marker
                key={location.id}
                position={location.position as [number, number]}
                icon={outbreakIcon}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold">{location.name}</h3>
                    <p className="text-sm">Active Cases: {location.cases}</p>
                    <p className="text-sm">Risk Level: {location.risk}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">High Risk Areas</h3>
            <ul className="space-y-2 text-sm">
              {currentLocations
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((loc:any) => loc.risk === 'High')
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((loc:any) => (
                  <li key={loc.id} className="flex items-center text-red-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {loc.name} ({loc.cases} cases)
                  </li>
                ))}
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Medium Risk Areas</h3>
            <ul className="space-y-2 text-sm">
              {currentLocations
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((loc:any) => loc.risk === 'Medium')
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((loc:any) => (
                  <li key={loc.id} className="flex items-center text-yellow-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {loc.name} ({loc.cases} cases)
                  </li>
                ))}
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Low Risk Areas</h3>
            <ul className="space-y-2 text-sm">
              {currentLocations
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((loc:any) => loc.risk === 'Low')
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((loc:any) => (
                  <li key={loc.id} className="flex items-center text-green-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {loc.name} ({loc.cases} cases)
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutbreakMap;