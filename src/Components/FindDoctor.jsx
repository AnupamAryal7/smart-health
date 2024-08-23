import React, { useState } from 'react';

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const doctors = [
    { name: 'Dr. Lalit Mishra', specialty: 'Cardiologist', phone: '9803317061' },
    { name: 'Dr. Anil Kumar Bhatta', specialty: 'Dermatologist',phone: '9803317062' },
    { name: 'Dr. Uttam Sedhain', specialty: 'Neurologist' ,phone: '9803317063'},
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Find a Doctor</h2>
      <input
        type="text"
        placeholder="Search by name or specialty"
        className="p-2 border border-gray-300 rounded w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredDoctors.map((doctor, index) => (
          <li key={index} className="p-4 mb-2 bg-gray-100 rounded hover:bg-gray-200">
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className='text-gray-600'>{doctor.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindDoctor;
