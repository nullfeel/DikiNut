import React from 'react';

interface RecipeInstructionsProps {
  instructions: string[];
}

export default function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <ol className="list-decimal list-inside space-y-3">
      {instructions.map((instruction, index) => (
        <li key={index} className="text-gray-700 leading-relaxed pl-2">
          {instruction}
        </li>
      ))}
    </ol>
  );
}