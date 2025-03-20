import React from 'react';
import { MapPin } from 'lucide-react';

const OutbreakMap = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-3 mb-6">
        <MapPin className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-semibold">Outbreak Map</h2>
      </div>

      <div className="aspect-video bg-gray-100 rounded-lg mb-6 relative">
        {/* Placeholder for map - in a real application, this would be an actual map component */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Interactive map will be displayed here</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">High Risk Areas</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-red-600">
              <MapPin className="h-4 w-4 mr-2" />
              Downtown District
            </li>
            <li className="flex items-center text-red-600">
              <MapPin className="h-4 w-4 mr-2" />
              Central Park Area
            </li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Medium Risk Areas</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-yellow-600">
              <MapPin className="h-4 w-4 mr-2" />
              West Side
            </li>
            <li className="flex items-center text-yellow-600">
              <MapPin className="h-4 w-4 mr-2" />
              Harbor District
            </li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Distribution Centers</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-green-600">
              <MapPin className="h-4 w-4 mr-2" />
              Main Community Center
            </li>
            <li className="flex items-center text-green-600">
              <MapPin className="h-4 w-4 mr-2" />
              South Medical Complex
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutbreakMap;