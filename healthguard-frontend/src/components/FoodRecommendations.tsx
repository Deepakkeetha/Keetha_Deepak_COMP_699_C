import React from 'react';
import { Utensils } from 'lucide-react';

const FoodRecommendations = () => {
  const recommendations = [
    {
      title: 'Immune Boosting Foods',
      items: [
        {
          name: 'Citrus Fruits',
          description: 'Rich in Vitamin C to boost immune system',
          image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=300',
        },
        {
          name: 'Leafy Greens',
          description: 'High in antioxidants and nutrients',
          image: 'https://images.unsplash.com/photo-1574316071802-0d684b3c7b66?auto=format&fit=crop&w=300',
        },
        {
          name: 'Lean Proteins',
          description: 'Essential for recovery and strength',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=300',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Utensils className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">Food Recommendations</h2>
        </div>

        {recommendations.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-medium mb-4">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-medium mb-4">Request Food Assistance</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your delivery address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Special Dietary Requirements
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              placeholder="List any allergies or dietary restrictions..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Request Assistance
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodRecommendations;