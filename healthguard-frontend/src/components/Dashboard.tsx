import React from 'react';
import { Users, AlertCircle, Utensils, MapPin } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Cases"
          value="1,234"
          icon={<Users className="h-6 w-6 text-blue-600" />}
          change="+5.3%"
        />
        <StatCard
          title="Reported Today"
          value="156"
          icon={<AlertCircle className="h-6 w-6 text-yellow-600" />}
          change="+2.1%"
        />
        <StatCard
          title="Food Deliveries"
          value="892"
          icon={<Utensils className="h-6 w-6 text-green-600" />}
          change="+12.4%"
        />
        <StatCard
          title="Affected Areas"
          value="23"
          icon={<MapPin className="h-6 w-6 text-red-600" />}
          change="+1"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Anonymous User</p>
                  <p className="text-sm text-gray-500">Reported fever and fatigue</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Distribution Centers</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Center {i}</p>
                  <p className="text-sm text-gray-500">123 Main St, City</p>
                </div>
                <span className="text-sm text-gray-500">Active</span>
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