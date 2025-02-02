import React from 'react';

interface CalorieRangeSliderProps {
  minValue: number;
  maxValue: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

export default function CalorieRangeSlider({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange
}: CalorieRangeSliderProps) {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 100);
    onMinChange(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 100);
    onMaxChange(value);
  };

  const getBackgroundSize = (value: number, min: number, max: number) => {
    return ((value - min) * 100) / (max - min) + '% 100%';
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Min Calories</span>
          <span className="font-medium">{minValue}</span>
        </div>
        <input
          type="range"
          min={0}
          max={2000}
          value={minValue}
          onChange={handleMinChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:bg-teal-600
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-webkit-slider-thumb]:active:scale-95"
          style={{
            backgroundSize: getBackgroundSize(minValue, 0, 2000),
            backgroundImage: 'linear-gradient(#0D9488, #0D9488)'
          }}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Max Calories</span>
          <span className="font-medium">{maxValue}</span>
        </div>
        <input
          type="range"
          min={100}
          max={3000}
          value={maxValue}
          onChange={handleMaxChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:bg-teal-600
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-webkit-slider-thumb]:active:scale-95"
          style={{
            backgroundSize: getBackgroundSize(maxValue, 100, 3000),
            backgroundImage: 'linear-gradient(#0D9488, #0D9488)'
          }}
        />
      </div>

      <div className="flex items-center justify-center space-x-2 text-sm">
        <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
          Range: {maxValue - minValue} calories
        </div>
      </div>
    </div>
  );
}