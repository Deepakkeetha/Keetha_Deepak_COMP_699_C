import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AlertCircle, MapPin, Utensils, Activity, Users } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SymptomReporter from './components/SymptomReporter';
import FoodRecommendations from './components/FoodRecommendations';
import OutbreakMap from './components/OutbreakMap';
import SignIn from './components/SignIn';
import Register from './components/Register';

function App() {
  const location = useLocation();
  const isAuthPage = ['/signin', '/register'].includes(location.pathname);

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 py-4">
            <NavLink to="/" icon={<Activity size={20} />}>
              Dashboard
            </NavLink>
            <NavLink to="/report" icon={<AlertCircle size={20} />}>
              Report Symptoms
            </NavLink>
            <NavLink to="/food" icon={<Utensils size={20} />}>
              Food Recommendations
            </NavLink>
            <NavLink to="/map" icon={<MapPin size={20} />}>
              Outbreak Map
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<SymptomReporter />} />
          <Route path="/food" element={<FoodRecommendations />} />
          <Route path="/map" element={<OutbreakMap />} />
        </Routes>
      </main>
    </div>
  );
}

const NavLink = ({ to, icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <a
      href={to}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
        isActive
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
};

export default App;