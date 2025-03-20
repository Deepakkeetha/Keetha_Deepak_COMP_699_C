import React, { useState } from 'react';

const SymptomReporter = () => {
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    fatigue: false,
    headache: false,
    bodyAche: false,
    soreThroat: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle symptom submission
    console.log('Symptoms reported:', symptoms);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Report Your Symptoms</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {Object.entries(symptoms).map(([symptom, checked]) => (
            <div key={symptom} className="flex items-center">
              <input
                type="checkbox"
                id={symptom}
                checked={checked}
                onChange={(e) =>
                  setSymptoms((prev) => ({
                    ...prev,
                    [symptom]: e.target.checked,
                  }))
                }
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor={symptom}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            placeholder="Describe any other symptoms or concerns..."
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default SymptomReporter;