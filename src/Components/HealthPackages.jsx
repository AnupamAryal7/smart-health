import React from 'react';

const HealthPackages = () => {
  const packages = [
    {
      name: 'Basic Health Checkup',
      price: '$99',
      details: 'Includes basic tests like blood sugar, cholesterol, and BP check.',
    },
    {
      name: 'Advanced Health Checkup',
      price: '$199',
      details: 'Includes all basic tests plus ECG, liver function tests, and more.',
    },
    {
      name: 'Comprehensive Health Checkup',
      price: '$299',
      details: 'Includes all advanced tests plus MRI, CT scan, and more.',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Health Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {packages.map((pkg, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded bg-gray-50 hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-gray-700 mb-2">{pkg.details}</p>
            <span className="text-lg font-bold text-blue-500">{pkg.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackages;
