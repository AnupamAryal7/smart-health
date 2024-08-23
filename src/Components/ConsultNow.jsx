import React, { useState } from 'react';

const ConsultNow = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [isConsulting, setIsConsulting] = useState(false);

  const doctors = [
    { name: 'Dr. Lalit Mishra', specialty: 'Cardiologist', phone: '9803317061' },
    { name: 'Dr. Anil Kumar Bhatta', specialty: 'Dermatologist',phone: '9803317062' },
    { name: 'Dr. Uttam Sedhain', specialty: 'Neurologist' ,phone: '9803317063'},
  ];

  const startConsultation = () => {
    if (selectedDoctor) {
      setIsConsulting(true);
      // Here you would integrate with a video chat API like WebRTC, Twilio, etc.
      console.log(`Starting consultation with ${selectedDoctor}`);
    } else {
      alert('Please select a doctor to consult.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Consult Now</h2>
      <select
        className="p-2 border border-gray-300 rounded w-full mb-4"
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
      >
        <option value="" disabled>Select a Doctor</option>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.name}>
            {doctor.name} - {doctor.specialty}
          </option>
        ))}
      </select>
      <button
        onClick={startConsultation}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors w-full"
      >
        Start Consultation
      </button>

      {isConsulting && (
        <div className="mt-4">
          <p className="text-green-600">Consultation started with {selectedDoctor}!</p>
          {/* Integrate video chat component here */}
        </div>
      )}
    </div>
  );
};

export default ConsultNow;
