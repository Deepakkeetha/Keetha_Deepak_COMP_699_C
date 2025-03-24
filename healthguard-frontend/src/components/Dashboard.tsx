import React, { useState } from 'react';
import { Users, AlertCircle, Utensils, MapPin } from 'lucide-react';

// Dummy outbreak data
const outbreakTypes = [
  { id: 'covid19', name: 'COVID-19' },
  { id: 'influenza', name: 'Influenza' },
  { id: 'dengue', name: 'Dengue Fever' },
  { id: 'measles', name: 'Measles' }
];

const outbreakData = {
  covid19: {
    activeCases: '1,234',
    reportedToday: '156',
    foodDeliveries: '892',
    affectedAreas: '23',
    recentReports: [
      { user: 'Anonymous User', symptoms: 'Fever and fatigue', time: '2 hours ago' },
      { user: 'Anonymous User', symptoms: 'Cough and headache', time: '3 hours ago' },
      { user: 'Anonymous User', symptoms: 'Loss of taste', time: '4 hours ago' }
    ],
    centers: [
      { name: 'Center 1', address: '123 Main St, City', status: 'Active' },
      { name: 'Center 2', address: '456 Oak St, City', status: 'Active' },
      { name: 'Center 3', address: '789 Pine St, City', status: 'Active' }
    ]
  },
  influenza: {
    activeCases: '2,567',
    reportedToday: '234',
    foodDeliveries: '567',
    affectedAreas: '15',
    recentReports: [
      { user: 'Anonymous User', symptoms: 'High fever', time: '1 hour ago' },
      { user: 'Anonymous User', symptoms: 'Body aches', time: '3 hours ago' },
      { user: 'Anonymous User', symptoms: 'Sore throat', time: '5 hours ago' }
    ],
    centers: [
      { name: 'Center 1', address: '321 Elm St, City', status: 'Active' },
      { name: 'Center 2', address: '654 Maple St, City', status: 'Active' },
      { name: 'Center 3', address: '987 Birch St, City', status: 'Active' }
    ]
  },
  dengue: {
    activeCases: '567',
    reportedToday: '45',
    foodDeliveries: '234',
    affectedAreas: '8',
    recentReports: [
      { user: 'Anonymous User', symptoms: 'Severe headache', time: '2 hours ago' },
      { user: 'Anonymous User', symptoms: 'Joint pain', time: '4 hours ago' },
      { user: 'Anonymous User', symptoms: 'High fever', time: '6 hours ago' }
    ],
    centers: [
      { name: 'Center 1', address: '741 Palm St, City', status: 'Active' },
      { name: 'Center 2', address: '852 Beach St, City', status: 'Active' },
      { name: 'Center 3', address: '963 Ocean St, City', status: 'Active' }
    ]
  },
  measles: {
    activeCases: '345',
    reportedToday: '23',
    foodDeliveries: '178',
    affectedAreas: '5',
    recentReports: [
      { user: 'Anonymous User', symptoms: 'Rash and fever', time: '1 hour ago' },
      { user: 'Anonymous User', symptoms: 'Cough and runny nose', time: '3 hours ago' },
      { user: 'Anonymous User', symptoms: 'Red eyes', time: '5 hours ago' }
    ],
    centers: [
      { name: 'Center 1', address: '147 Hill St, City', status: 'Active' },
      { name: 'Center 2', address: '258 Valley St, City', status: 'Active' },
      { name: 'Center 3', address: '369 Mountain St, City', status: 'Active' }
    ]
  }
};

const Dashboard = () => {
  const [selectedOutbreak, setSelectedOutbreak] = useState(outbreakTypes[0].id);
  const currentData = outbreakData[selectedOutbreak];

  return (
    <div className="space-y-6">
      {/* Outbreak Selection */}
      <div className="bg-white p-4 rounded-lg shadow">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Cases"
          value={currentData.activeCases}
          icon={<Users className="h-6 w-6 text-blue-600" />}
          change="+5.3%"
        />
        <StatCard
          title="Reported Today"
          value={currentData.reportedToday}
          icon={<AlertCircle className="h-6 w-6 text-yellow-600" />}
          change="+2.1%"
        />
        <StatCard
          title="Food Deliveries"
          value={currentData.foodDeliveries}
          icon={<Utensils className="h-6 w-6 text-green-600" />}
          change="+12.4%"
        />
        <StatCard
          title="Affected Areas"
          value={currentData.affectedAreas}
          icon={<MapPin className="h-6 w-6 text-red-600" />}
          change="+1"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {currentData.recentReports.map((report, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">{report.user}</p>
                  <p className="text-sm text-gray-500">{report.symptoms}</p>
                </div>
                <span className="text-sm text-gray-500">{report.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Distribution Centers</h2>
          <div className="space-y-4">
            {currentData.centers.map((center, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">{center.name}</p>
                  <p className="text-sm text-gray-500">{center.address}</p>
                </div>
                <span className="text-sm text-gray-500">{center.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, change }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      {icon}
    </div>
    <div className="mt-4">
      <span className="text-sm text-green-600">{change} from last week</span>
    </div>
  </div>
);

export default Dashboard;