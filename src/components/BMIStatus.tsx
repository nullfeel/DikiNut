import React from 'react';

interface BMIStatusProps {
  height: number; // in cm
  weight: number; // in kg
}

export default function BMIStatus({ height, weight }: BMIStatusProps) {
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { status: 'Underweight', color: 'text-blue-600' };
    if (bmi < 25) return { status: 'Normal', color: 'text-green-600' };
    if (bmi < 30) return { status: 'Overweight', color: 'text-yellow-600' };
    return { status: 'Obese', color: 'text-red-600' };
  };

  const bmi = calculateBMI();
  const { status, color } = getBMIStatus(bmi);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your BMI Status</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">BMI Value</p>
          <p className="text-2xl font-bold text-gray-800">{bmi.toFixed(1)}</p>
        </div>
        <div>
          <p className="text-gray-600">Status</p>
          <p className={`text-2xl font-bold ${color}`}>{status}</p>
        </div>
      </div>
    </div>
  );
}