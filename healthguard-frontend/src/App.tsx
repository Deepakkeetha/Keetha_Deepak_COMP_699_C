import React, { useState } from 'react';
import { AlertCircle, MapPin, Utensils, Activity, Users } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SymptomReporter from './components/SymptomReporter';
import FoodRecommendations from './components/FoodRecommendations';
import OutbreakMap from './components/OutbreakMap';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 py-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'dashboard'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Activity size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'report'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <AlertCircle size={20} />
              <span>Report Symptoms</span>
            </button>
            <button
              onClick={() => setActiveTab('food')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'food'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Utensils size={20} />
              <span>Food Recommendations</span>
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'map'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MapPin size={20} />
              <span>Outbreak Map</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'report' && <SymptomReporter />}
        {activeTab === 'food' && <FoodRecommendations />}
        {activeTab === 'map' && <OutbreakMap />}
      </main>
    </div>
  );
}

export default App;